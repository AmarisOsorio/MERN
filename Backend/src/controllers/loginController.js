/**
 * Como vamos a validar si es cliente o empleado
 * entoces importamos ambos modelos
 */

import ClientsModel from "../models/Clients.js"
import EmployeesModel from "../models/Employees.js"
import bcrypt from "bcryptjs";
import jsonwebtokenerror from "jsonwebtoken";
import  {config} from "../config.js";

const loginController ={}

loginController.login = async (req,res) => {
    const { email , password } = req.body;

    try{

        /**
         * Validamos los 3 posibles niveles
         * 1. Admin
         * 2. Empleado
         * 3. Cliente
         */

        let userFound; //variable para que encontremos un usuario
        let userType; // variable que nos dice su tipo de usuario

        /**
         * 1. Admin
         * Verifiquemos si esta ingresando es Admin
         */
        if(email === config.emailAdmin.email && password === config.emailAdmin.password){
            userType = "Admin";
            userFound = {_id : "Admin"};
        }else{
            /*2. Empleados*/
            userFound = await EmployeesModel.findOne({email});
            userType = "Employee"

            /*3. Clientes*/
            if(!userFound){
                userFound = await ClientsModel.findOne({email});
                userType = "Clients"
            }
        }

        /*Si no encontramo un usuario */
        if(!userFound){
            return res.json({message: "User not found"});
        }

        /*Si no es administrador, validadmos la contraseña */

        if(!userType !== "Admin"){
            const isMatch = bcryptjs.compare(password , userFound.password);
            if(!isMatch){
                return res.json({message: "Invalid password"});
            } 
            
        }

        /*Generar el token */
        jsonwebtokenerror.sign(
            {id: userFound._id , userType},

            config.JWT.secret,

            {expiresIn: config.JWT.expiresIn},

            (error , token) => {
                if(error) console.log(error);

                res.cookie("authToken",token)
            }
        )
        

    }
    catch(error){
        console.log(error)
    }
}

 export default loginController;
import Employees from "../models/Employees.js";
import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; //Generar Token
import {config} from "../config.js"



//Se crea un array de funciones
const resgisterEmployeesController = {};

resgisterEmployeesController.register = async (req,res) => {
    const {name , lastName , birthday , email , address , hireDate , password , telephone , dui , isssNumber , isVerified} = req.body;

    try{
        //verificamos si el empleado ya existe
        const existEmployee = await Employees.findOne({email});
        if(existEmployee){
            return res.json({message: "Employee already exists"})
        }

        //Hashear o encriptar la contraseña
        const passwordHash = await bcryptjs.hash(password , 10);

        //Guardar el empleadp
        const newEmployee = new Employees({name , lastName , birthday , email , address , hireDate , password: passwordHash , telephone , dui , isssNumber , isVerified});
        await newEmployee.save();

        //Generar un token que valide que ya estoy registrado 
        //y poder acceder a todas las paginas

        const userType = "Employee"

        jsonwebtoken.sign(
            //1
            {id: newEmployee._id , userType},
        
            //2
            config.JWT.secret,

            //3
            {expiresIn: config.JWT.expiresIn},

            //4
            (error, token) => {
                if(error) console.log(error);
                res.cookie("authToken", token)
                res.json({message: "Empleado Registrado"})
            }

        )



    }
    catch(error){
        console.log(error)
        res.json({message: "Error al registrar empleado"})
    }
}

export default resgisterEmployeesController;






/**
 * Librerias a utilizar:
 * npm install bcryptjs
 * npm install jsonwebtoken
 * npm install cookie-parser
 */


/**
 * Token
 * 1. Que voy a guardar
 * 2. Secreto
 * 3. Cuando expira
 * 4. función fecha(error o guardar token)
 */

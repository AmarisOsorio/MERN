import clientsModel from "../models/Clients.js"
import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; //Generar Token
import nodemailer from "nodemailer"; //Enviar Correo
import crypto from "crypto"; //genera código aleatorio
import {config} from "../config.js"

const registerClientsController = {};

registerClientsController.register = async (req,res) => {
    const{ name , lastName , birthday , email , password , telephone , dui , isVerified } = req.body;

    try {
        //verificamos si el cliente existe
        const existClient = await clientsModel.findOne({email})
        if(existClient){
            return res.json({message: "This client already exist"})
        }

        //encriptar la contraseña del cliente
        const passwordHash = await bcryptjs.hash( password , 10 )

        //Guardo al cliente
        const newClient = new clientsModel({ name , lastName , birthday , email , password: passwordHash , telephone , dui: dui||null , isVerified: isVerified || false })
        newClient.save();

        //generamos un código aleatorio
        const verificationCode = crypto.randomBytes(3).toString("hex") //esto nos permite un código hexadecimal con letras y numeros

        //Crear el token
        const tokenCode = jsonwebtoken.sign(
            //1. Que vamos a guardar?
            {email , verificationCode},

            //2. Palabra secreta
            config.JWT.secret,

            //3.Cuando expira
            {expiresIn: "2h"},
        ) 

        res.cookie("VerificationToken" , tokenCode , {maxAge: 2*60*60*1000})

        //enviar el correo electronico
        //1. Transporter => es quien lo envia
        const transporter = nodemailer.createTransport({
            service: "gmail", auth: {user: config.email.email_user, pass: config.email.email_pass}
        })

        //2. mailOption = Quien lo recibe
        const mailOption = {
            //1) Quien lo envia
            from: config.email.email_user,
            //2) QUien lo recibe
            to: email, //esta es la variable es con la que se esta registrando el cliente
            //Asunto
            subject: "Verificación de Correo",
            //cuerpo del correo
            text: `Para verificar tu correo, utiliza el siguiente código ${verificationCode}\n 
            El código vence en dos horas`
        }  

        //3. Enviar correo
        transporter.sendMail(mailOption, (error,info) =>{
            if(error) return res.json({message: "Error"})
            console.log ("Correo enviado")
        })

        res.json({message: "Client succesfully registered! Please verify your email with the code send"})

    } catch (error) {
        res.json({message: "ERROR" + error})
    }
};

//Verificar el código

registerClientsController.verifyCodeEmail = async ( req , res ) => {
    const {verificationCode} = req.body;
    const token = req.cookies.VerificationToken;

    try {
        //Verificar y decodificar el token
        const decoded = jsonwebtoken.verify(token , config.JWT.secret)
        const {email , verificationCode: storedCode} = decoded;

        //Comparar el código que enviamos al correo con el que el usuario escribe
        if(verificationCode !== storedCode){
            return res.json({message: "Invalid code"})
        }

        //Cambiamos el estado de "isVErified" a true
        const client = await clientsModel.findOne({email});
        client.isVerified = true;
        await client.save();

        res.json({message: "Email verified successfully!"})

        //Quito la cookie con el token
        res.clearCookie("VerificationToken")
    } catch (error) {
        res.json({message: "ERROR" + error});
    }
}

export default registerClientsController;




/**
 * 
 * (⌐■_■)
 * 
 */
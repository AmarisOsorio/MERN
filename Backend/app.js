    //Importo todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js" //OJO: recuerda siempre agregar el archivo '.js'
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import categoriesRoutes from "./src/routes/categories.js"
import reviewsRoutes from "./src/routes/reviews.js"
import gradeRoute from "./src/routes/grade.js"
import registerEmployeesRoute from "./src/routes/registerEmployees.js"
import loginRoute from "./src/routes/login.js"
import cookieParser from "cookie-parser";
import logoutRoutes from "./src/routes/logout.js";
import registerClientsRoute from "./src/routes/registerClients.js";
import passwordRecoveryRoute from "./src/routes/paswordRecovery.js";
import blogRoute from "./src/routes/blog.js";
import salesRoute from "./src/routes/sales.js"
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";
import cors from 'cors';
import swaggerUI from "swagger-ui-express"

import fs from "fs";
import path from "path";

/*Crear una constante que es igual
 a la libreria que importe y la ejecutamos*/
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173", // Dominio del cliente
    credentials: true, // Permitir envío de cookies y credenciales
  })
);

app.use(express.json()); //Esto permitira el uso de middleware para que acepte datos json, se coloca siempre arriba de las rutas
app.use(cookieParser()); // Que acepte cookies


/**
 * Utilizar el sistema de archivos para leer el JSON
 * de swagger y ver mi documentación
 */
const swaggerDocument = JSON.parse(fs.readFileSync(
  path.resolve("./ricaldone-0c9-CocaCola-1.0.0-resolved.json"),"utf-8"
))
 
//Documentación
app.use("/api/docs" , swaggerUI.serve , swaggerUI.setup(swaggerDocument));
//Definir la ruta
app.use("/api/products" , productsRoutes);
app.use("/api/clients" , clientsRoutes); 
app.use("/api/employees" , validateAuthToken(["Employee" , "Admin"]) , employeesRoutes);
app.use("/api/branches" , branchesRoutes);
app.use("/api/categories" , categoriesRoutes);
app.use("/api/reviews" , reviewsRoutes);
app.use("/api/grade", gradeRoute);
app.use("/api/registerEmployees", registerEmployeesRoute);
app.use("/api/registerClients",registerClientsRoute);
app.use("/api/blog", blogRoute);
app.use("/api/sales", salesRoute);
//Login                                                                                                    
app.use("/api/login" , loginRoute);
app.use("/api/logout", logoutRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoute);



//Exportó la constante para poder usar express en otros lados
export default app;



/**
 * EL insert se puede dejar en empleados 
 * o se quita y se crea en el insert en 
 * de registrar de empleados
 */

/**
 * Nodemon nos va ayudar a mantener el conectado el servidor
 * sin desconectarlo 
 * 
 * instalarlo es: npm install nodemon
 * ejecutar: npm run dev
 */

/**Librerias extra para verificar correo:
 * npm install nodemailer
 * npm install crypto
 * 
 * 
 * Librerias para subir imagenes,
 * Se utilizara Cloudinary: 
 * 
 * npm install cloudinary (Segunda)
 * npm install multer (Tercera)
 * npm install multer-storage-cloudinary (Primero instalar esta, para que no de conflictos)
 * 
 * Librerias para documentación
 * npm i swagger-ui-express --force(esto es para que no de error cloudinary)
 */
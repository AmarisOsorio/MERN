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

/*Crear una constante que es igual
 a la libreria que importe y la ejecutamos*/
const app = express();


app.use(express.json()); //Esto permitira el uso de middleware para que acepte datos json, se coloca siempre arriba de la ruta
app.use(cookieParser()); // Que acepte cookies

//Definir la ruta
app.use("/api/products" , productsRoutes);
app.use("/api/clients" , clientsRoutes); 
app.use("/api/employees" , employeesRoutes);
app.use("/api/branches" , branchesRoutes);
app.use("/api/categories" , categoriesRoutes);
app.use("/api/reviews" , reviewsRoutes);
app.use("/api/grade", gradeRoute);
app.use("/api/registerEmployees" , registerEmployeesRoute);
app.use("/api/registerClients",registerClientsRoute);
//Login
app.use("/api/login" , loginRoute);
app.use("/api/logout", logoutRoutes);



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
 */
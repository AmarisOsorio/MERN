//Importo todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js" //OJO: recuerda siempre agregar el archivo '.js'
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import categoriesRoutes from "./src/routes/categories.js"
import reviewsRoutes from "./src/routes/reviews.js"
import gradeRoute from "./src/routes/grade.js"

/*Crear una constante que es igual
 a la libreria que importe y la ejecutamos*/
const app = express();


app.use(express.json()); //Esto permitira el uso de middleware para que acepte datos json, se coloca siempre arriba de la ruta

//Definir la ruta
app.use("/api/products", productsRoutes);
app.use("/api/clients", clientsRoutes); 
app.use("/api/employees" , employeesRoutes);
app.use("/api/branches" , branchesRoutes);
app.use("/api/categories" , categoriesRoutes);
app.use("/api/reviews" , reviewsRoutes);
app.use("/api/grade",gradeRoute);


//Exportó la constante para poder usar express en otros lados
export default app;

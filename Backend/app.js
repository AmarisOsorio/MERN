//Importo todo lo de la libreria express
import express from "express";

//Crear una constante que es igual
// a la libreria que importe y la ejecutamos
const app = express();

//Definir la ruta
app.use("/api/products")



//Exportó la constante para poder usar express en otros lados
export default app;

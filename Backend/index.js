//importar el archivo app.js
import app from "./app.js";
import "./database.js";

//Creo una función que se encarga de 
//ejecutar el servidor
async function main() {
    const port = 4000;
    app.listen(port);
    console.log("Server is running");
}

//Ejecutamos todo con la función que acabamos de crear
main();
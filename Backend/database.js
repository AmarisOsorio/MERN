import mongoose from "mongoose";

//Guardo en una constante la dirección
// de mi base de datos
const URI= "mongodb://localhost:27017/cocaColaDB"

//Conectar la base de datos
mongoose.connect(URI)

//-----------Comprobación que la base sirva----------------//

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("DB is connected")
})

connection.on("disconnected",() => {
    console.log("DB is disconnected")
})

connection.on("error",(error) => {
    console.log("Error found" + error)
})

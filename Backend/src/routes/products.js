/*En este archivo  dentro de la carpeta
routes, vamos a colocar, los métodos
que tiene la ruta "/api/products"
*/

import express from "express";
import productsController from "../controllers/productsController.js"; //OJO: recuerda siempre agregar el archivo '.js'

const router = express.Router();

router.route("/") //Nota: sin id
.get(productsController.getProducts)
.post(productsController.insertProducts);

router.route("/:id") //Nota: con id
.put(productsController.updateProduct)
.delete(productsController.deleteProduct);

export default router;
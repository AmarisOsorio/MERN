import express from "express";
import categoriesController from "../controllers/categoriesController.js"; //OJO: recuerda siempre agregar el archivo '.js'

const router = express.Router();

router.route("/") //Nota: sin id
.get(categoriesController.getCategories)
.post(categoriesController.insertCategories);

router.route("/:id") //Nota: con id
.put(categoriesController.updateCategories)
.delete(categoriesController.deleteCategories);

export default router;
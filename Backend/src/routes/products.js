/*En este archivo  dentro de la carpeta
routes, vamos a colocar, los métodos
que tiene la ruta "/api/products"
*/

import express from "express";

const router = express.Router();

router.route("/").get().post().put().delete()

export default router;
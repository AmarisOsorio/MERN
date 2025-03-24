import express from "express";
import resgisterEmployeesController from "../controllers/registerEmployeesController.js";

const router = express.Router();

router.route("/")
.post(resgisterEmployeesController.register)

export default router;

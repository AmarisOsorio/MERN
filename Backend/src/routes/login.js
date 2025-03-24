import express from "express";
import loginController from "../controllers/loginController.js";

const router = express.Router(loginController.login);

router.route("/").post()

export default router;

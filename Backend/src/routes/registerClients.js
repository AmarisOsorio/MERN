import express  from "express";
import registerClientsController from "../controllers/registerClientsController.js";

const router = express.Router();

router.route("/").post(registerClientsController.register);
router.route("/verifyCodeEmail").post(registerClientsController.verifyCodeEmail); //esto es como un dominio y significa: /api/registerClients/verifyCodeEmail

export default router;
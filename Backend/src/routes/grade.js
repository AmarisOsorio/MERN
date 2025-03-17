import express from "express";
import gradeController from "../controllers/gradeController.js";

const router = express.Router();

router.route("/")
.get(gradeController.getEvaluation)
.post(gradeController.insertEvaluation);

router.route("/:id")
.put(gradeController.updateEvaluation)
.delete(gradeController.deleteEvaluation);

export default router;
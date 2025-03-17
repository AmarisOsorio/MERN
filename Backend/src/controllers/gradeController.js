
const gradeController = {};
import gradeModel from "../models/Grade.js"


/********************** S E L E C T **************************/


gradeController.getEvaluation = async (req , res) => {
    const grade = await gradeModel.find().populate("idEmployees")
    res.json(grade)
};


/********************** I N S E R T **************************/


gradeController.insertEvaluation = async (req , res) => {
    const { comment , grade , role , idEmployees } = req.body;
    const newEvaluation = gradeModel({ comment , grade , role , idEmployees })
    await newEvaluation.save()
    res.json({message: "Evaluation has been save"})
};


/********************** D E L E T E **************************/


gradeController.deleteEvaluation = async (req , res) => {
    await gradeModel.findByIdAndDelete(req.params.id)
    res.json({message: "Evaluation has been delete"})
};


/********************** U P D A T E **************************/


gradeController.updateEvaluation = async (req , res) => {
    const { comment , grade , role , idEmployees } = req.body;
    await gradeModel.findByIdAndUpdate(req.params.id,{comment , grade , role , idEmployees},{new : true})
    res.json({message: "Evaluation has been update"})
};


export default gradeController;
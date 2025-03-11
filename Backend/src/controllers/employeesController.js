const employeesController = {};
import employeesModel from "../models/Employees.js";

/********************** S E L E C T **************************/


employeesController.getEmployees = async (req , res) => {
    const employees = await employeesModel.find()
    res.json(employees)
};


/********************** I N S E R T **************************/


employeesController.insertEmployees = async (req , res) => {
    const { name , lastName , birthday , email , address , hireDate , password , telephone , dui , isssNumber , isVerified } = req.body;
    const newEmployees = new employeesModel({ name , lastName , birthday , email , address , hireDate , password , telephone , dui , isssNumber , isVerified })
    await newEmployees.save()
    res.json({messaje: "The employees has been save"})
};


/********************** D E L E T E **************************/


employeesController.deleteEmployees = async (req , res) => {
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "The employees has been delete"})
};


/********************** U P D A T E **************************/


employeesController.updateEmployees = async (req , res) => {
    const { name , lastName , birthday , email , address , hireDate , password , telephone , dui , isssNumber , isVerified } = req.body;
    const updatedProduct = await productsModel.findByIdAndUpdate(req.params.id, { name , lastName , birthday , email , address , hireDate , password , telephone , dui , isssNumber , isVerified } , {new: true})
    res.json({message: "The employees has been update"});
};


export default employeesController;


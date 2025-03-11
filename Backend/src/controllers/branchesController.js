const branchesController = {};
import branchesModel from "../models/Branches.js";

/********************** S E L E C T **************************/


branchesController.getBranches = async (req , res) => {
    const branches = await branchesModel.find()
    res.json(branches)
};


/********************** I N S E R T **************************/


branchesController.insertBranches = async (req , res) => {
    const { name , address , telephone , schedule } = req.body;
    const newBranches = new branchesModel({ name , address , telephone , schedule })
    await newBranches.save()
    res.json({messaje: "branches saved"})
};


/********************** D E L E T E **************************/


branchesController.deleteBranches = async (req , res) => {
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "branches deleted"})
};


/********************** U P D A T E **************************/


branchesController.updateBranches = async (req , res) => {
    const { name , address , telephone , schedule } = req.body;
    const updatedBranches = await branchesModel.findByIdAndUpdate(req.params.id, { name , address , telephone , schedule } , {new: true})
    res.json({message: "product updated"});
};

export default branchesController;

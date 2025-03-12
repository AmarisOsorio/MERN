const categoriesController = {};
import categoriesModel from "../models/Categories.js";


/********************** S E L E C T **************************/


categoriesController.getCategories = async (req , res) => {
    const categories = await categoriesModel.find()
    res.json(categories)
};


/********************** I N S E R T **************************/


categoriesController.insertCategories = async (req , res) => {
    const { name , description , status , image } = req.body;
    const newCategories = new categoriesModel({ name , description , status , image })
    await newCategories.save()
    res.json({messaje: "Categories has been saved"})
};


/********************** D E L E T E **************************/


categoriesController.deleteCategories = async (req , res) => {
    await categoriesModel.findByIdAndDelete(req.params.id)
    res.json({message: "The categories has been deleted"})
};


/********************** U P D A T E **************************/


categoriesController.updateCategories = async (req , res) => {
    const { name , description , status , image } = req.body;
    const updatedCategories = await productsModel.findByIdAndUpdate(req.params.id, { name , description , status , image } , {new: true})
    res.json({message: "The categories has been updated"});
};


export default categoriesController;
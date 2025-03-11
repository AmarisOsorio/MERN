const clientsController = {};
import clientsModel from "../models/Clients.js";


/********************** S E L E C T **************************/


clientsController.getClient = async (req , res) => {
    const clients = await clientsModel.find()
    res.json(clients)
};


/********************** I N S E R T **************************/


clientsController.insertClient = async (req , res) => {
    const { name , lastName , birthday , email , password , telephone , dui , isVerified } = req.body;
    const newClient = new clientsModel({ name , lastName , birthday , email , password , telephone , dui , isVerified  })
    await newClient.save()
    res.json({messaje: "The client has been save"})
};


/********************** D E L E T E **************************/


clientsController.deleteClient = async (req , res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "The client has been delete"})
};


/********************** U P D A T E **************************/


clientsController.updateClient = async (req , res) => {
    const { name , lastName , birthday , email , password , telephone , dui , isVerified } = req.body;
    const updatedProduct = await productsModel.findByIdAndUpdate(req.params.id, { name , lastName , birthday , email , password , telephone , dui , isVerified} , {new: true})
    res.json({message: "The client has been update"});
};

export default clientsController;
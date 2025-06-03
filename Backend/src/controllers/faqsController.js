//Ejemplo de más Validaciones

const faqsController = {};
import FaqsModel from "../models/Faqs.js"



/********************** S E L E C T **************************/


faqsController.getFaqs = async (req , res) => {
    try {
        const faqs = await FaqsModel.find()
        res.status(200).json(faqs) //Validacion para confirmar que todo esta correcto
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }
};


/********************** I N S E R T **************************/


faqsController.insertFaqs = async (req , res) => {
    try {
        const { question , answer , level , isActive } = req.body;

        if(level < 1 || level > 5){
            return res.status(400).json({message: "Ingrese nivel de valoración"})
        }

        //Validación de campos vacíos
        if(!question || !answer || !level || !isActive) {
            return res.status(400).json({message: "Ingrese los datos"})
        }

        //validación de longitud
        if(question.length < 4 || answer.length < 4){
            res.status(400).json({message: "Ingrese más caracteres"})
        }

        const newFaqs = new FaqsModel({ question , answer , level , isActive })
        await newFaqs.save()
        res.json({messaje: "The faqs has been save "})
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }
};


/********************** D E L E T E **************************/


faqsController.deleteFaqs = async (req , res) => {
    try {
        await FaqsModel.findByIdAndDelete(req.params.id)
        res.json({message: "The faqs has been delete"})
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }
};


/********************** U P D A T E **************************/


faqsController.updateFaqs = async (req , res) => {
    try {
        const { question , answer , level , isActive } = req.body;
        const updatedFaqs = await FaqsModel.findByIdAndUpdate(req.params.id, { question , answer , level , isActive } , {new: true})
        res.json({message: "The faqs has been update"});

        if(level < 1 || level > 5){
            return res.status(400).json({message: "Ingrese nivel de valoración"})
        }

        //Validación de campos vacíos
        if(!question || !answer || !level || !isActive) {
            return res.status(400).json({message: "Ingrese los datos"})
        }

        //validación de longitud
        if(question.length < 4 || answer.length < 4){
            res.status(400).json({message: "Ingrese más caracteres"})
        }

    } catch (error) {
        
    }
};


export default faqsController;
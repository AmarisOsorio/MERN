
const reviewsController = {};
import reviewsModel from "../models/Reviews.js"


/********************** S E L E C T **************************/


reviewsController.getReviews = async (req , res) => {
    const reviews = await reviewsModel.find().populate("idClient")
    res.json(reviews)
};


/********************** I N S E R T **************************/


reviewsController.insertReviews = async (req , res) => {
    const { comment , rating , idClient } = req.body;
    const newReview = reviewsModel({ comment , rating , idClient })
    await newReview.save()
    res.json({message: "reviews has been save"})
};


/********************** D E L E T E **************************/


reviewsController.deleteReview = async (req , res) => {
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "reviews has been delete"})
};


/********************** U P D A T E **************************/


reviewsController.updateReview = async (req , res) => {
    const { comment , rating , idClient } = req.body;
    await reviewsModel.findByIdAndUpdate(req.params.id,{comment , rating , idClient},{new : true})
    res.json({message: "reviews has been update"})
};


export default reviewsController;
import blogModel from "../models/blogP.js";
import {v2 as cloudinary} from "cloudinary";
import { config } from "../config.js";


//1. Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
});

//2. Array de funciones vacío
const blogController = {}

// Obtenemos todos los posts del blog
blogController.getAllPosts = async (req,res)=> {

    const posts = await blogModel.find();
    res.json(posts);

}

// Subir un post al blog
blogController.createPost = async (req, res) => {

    try {
        const {title, content}=req.body;
        let imageUrl = ""

        //subir la imagen a cloudinary
        if (req.file) {
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "public",
                    allowed_formats: [ "jpg" , "png" , "jpeg" ]
                }
            );

            imageUrl = result.secure_url
        }

        //Guardar la url
        const newPost = new blogModel({title,content,image: imageUrl})
        newPost.save()

        res.json({message: "post saved"})

    } catch (error) {
        console.log("errorñ" + error)
    }

}

export default blogController;
/*
   campos: 
      comment
      rating
      idClient
*/

import { Schema, model } from "mongoose";

const reviewsSchema = new Schema(
    {
        comment: {
            type: String,
            require: true
        },
        rating: {
            type: Number,
            require: true,
            max: 5,
            min: 0
        },
        idClient: {
            type: Schema.Types.ObjectId,
            ref: "Clients",    
            require: true
        }
        
    },
    {
        timestamps: true,
        strict: false
    }
)

export default model("Reviews", reviewsSchema)
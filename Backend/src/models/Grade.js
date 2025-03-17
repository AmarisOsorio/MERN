/*
   campos: 
      comment
      grade
      Role
      idEmployees
*/

import { Schema, model } from "mongoose";

const evaluationSchema = new Schema(
    {
        comment: {
            type: String,
            require: true
        },
        grade: {
            type: Number,
            require: true,
            max: 5,
            min: 0
        },
        role: {
            type: String,
            require: true
        },
        idEmployees: {
            type: Schema.Types.ObjectId,
            ref: "Employees",    
            require: true
        }
        
    },
    {
        timestamps: true,
        strict: false
    }
)

export default model("Evaluation", evaluationSchema)
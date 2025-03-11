/*
   Campos: 
     name
     address
     telephone
     schedule
*/

import { Schema , model } from "mongoose";

const branchesSchema = new Schema({
    name: {
    type: String,
      require: true,
      maxLength: 100
    },
    address: {
      type: String,
      require: true,
      maxLength: 100
    },
    telephone: {
        type: String,
        maxLength: 8
    },
    schedule: {
        type: String,
        require: true,
        maxLength:100
    }
},{
    timestamps: true,
    strict: false
});

export default model("Branches", branchesSchema);
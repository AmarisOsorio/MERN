/*
   Campos: 
     name
     description
     price
     stock
*/

import { Schema , model } from "mongoose"; //solo importo los que voy a necesitar de la libreria

const productsSchema = new Schema({
    name: {
    type: String,
      require: true,
      maxLength: 100
    },
    description: {
      type: String,
    },
    price: {
      type:Number,
      require: true,
      min: 0
    },
    stock: {
      type: String,
      require: true,
      min: 0
    }
},{
    timestamps: true,
    strict: false
});

export default model("Products", productsSchema);

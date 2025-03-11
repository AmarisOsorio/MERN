/*
   Campos: 
     name
     lastName
     birthday
     email
     password
     telephone
     dui
     isVerified (esto es booleano)
*/

import { Schema , model } from "mongoose";

const clientsSchema = new Schema({
    name: {
      type: String,
      require: true,
      maxLength: 100
    },
    lastName: {
      type: String,
      require: true,
      maxLength: 100
    },
    birthday: {
      type:String,
      maxLength: 50
    },
    email: {
      type: String,
      require: true,
      maxLength: 100
    },
    password: {
        type: String,
        require: true,
        maxLength: 8
      },
    telephone: {
        type: String,
        maxLength: 100
      },
    dui: {
        type: String,
        require: true,
        maxLength: 10

      },
    isVerified: {
        type: Boolean,
        require: true
      }
},{
    timestamps: true,
    strict: true
}); 

export default model("Clients", clientsSchema);
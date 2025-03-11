/*
   Campos: 
     name
     lastName
     birthday
     email
     address
     hireDate
     password
     telephone
     dui
     isssNumber
     isVerified
*/

import { Schema , model } from "mongoose";

const employeesSchema = new Schema({
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
      type: Date
    },
    email: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true,
      maxLength: 100
    },
    hireDate: {
      type: Date,
      require: true
    },
    password: {
      type: String,
      require: true,
      maxLength: 100
    },
    telephone: {
        type: String,
        maxLength: 8
    },
    dui: {
        type: String,
        require: true,
        maxLength: 10
    },
    isssNumber:{
        type: String,
        maxLength: 8
    },
    isVerified: {
        type: Boolean,
        require: true
      },
},{
    timestamps: true,
    strict: false
});

export default model("Employees", employeesSchema);
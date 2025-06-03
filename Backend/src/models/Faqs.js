/*
   campos: 
      question
      answer
      level
      isActive
*/

import { Schema , model } from "mongoose";

const faqsSchema = new Schema({
    question: {
      type: String,
      require: true,
      minLegth: 4,
      trim: true
    },
    answer: {
        type: String,
        require: true,
        minLegth: 4,
        trim: true
    },
    level: {
        type: Number,
        trim: true,
        minLegth: 1,
        maxLegth: 5
    },
    isActive: {
        type: Boolean,
        require: true
    }
},{   
    timestamps: true,
    strict: false
});

export default model("FAQs", faqsSchema);
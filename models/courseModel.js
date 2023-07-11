const mongoose = require("mongoose");
const Joi = require('joi');
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  price: { 
    type: Number, 
    required: true, 
    minlength: 3,
    maxlength: 50, 
  },
  date: {
     type: Date, default: Date.now 
    },
  description: {
    type: String,
  },

  teacher: {
    type : mongoose.Schema.Types.ObjectId,
      ref:"Teacher"
  }
});


function validateCourse (course){
  const schema  = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  price: Joi.number().required(),
  description:Joi.string(),
  teacher:Joi.string()
  });
  return schema.validate(course)
}


const Course = mongoose.model("Course", courseSchema);
module.exports = {Course,validateCourse,courseSchema};

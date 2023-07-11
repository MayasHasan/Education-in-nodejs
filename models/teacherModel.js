const mongoose = require("mongoose");
const Joi = require("joi");
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  salary: {
    type: Number,
  },
  specialization: {
    type: String,
    minlength: 3,
    maxlength: 255,
  },
  phone: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coures",
    },
  ],
});

function validateTeacher(teacher) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    salary: Joi.number().required(),
    specialization: Joi.string(),
    phone: Joi.string(),
    courses: Joi.array(),
  });
  return schema.validate(teacher);
}

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = { Teacher, validateTeacher };

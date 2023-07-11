const mongoose = require("mongoose");
const Joi = require('joi');
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: { 
    type: String,
    required: true, 
    minlength: 3,
    maxlength: 50, 
    unique:true
  },
  password: { 
    type: String,
    required: true, 
    minlength: 3,
    maxlength: 1024, 
  },
});
const User = mongoose.model("User", userSchema);

 function generateToken(user){
  const token = jwt.sign({id : user.id , name : user.name }, process.env.ACCESS_TOKEN,{expiresIn:"5m"})
  return token
}

function validateRegisterUser (user){
  const schema  = Joi.object({
  name: Joi.string().min(3).max(250).required(),
  email: Joi.string().min(3).max(250).required().email(),
  password:Joi.string().required()
  });
  return schema.validate(user)
}

function validateloginUser (user){
    const schema  = Joi.object({
    email: Joi.string().min(3).max(250).required().email(),
    password:Joi.string().required()
    });
    return schema.validate(user)
  }

module.exports = {User,validateRegisterUser,validateloginUser,generateToken};

const Joi = require('joi');
 Joi.objectId = require('joi-objectid')(Joi)

const objectIdSchema = Joi.object({
  id: Joi.objectId().required()
});

function validateObjectId(req, res, next) {
    const { error } = objectIdSchema.validate({ id: req.params.id });
  
    if (error) {
      return res.status(400).json({ error: 'Invalid Id' });
    }
  
    return next();
  }
  
  module.exports=validateObjectId

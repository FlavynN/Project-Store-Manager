const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.string().min(5).required()
  .messages({
    'string.min': '{#key} length must be at least 5 characters long"',
    'string.required': '{#key} is required"',
  })
  .label('name');

module.exports = { idSchema, nameSchema };
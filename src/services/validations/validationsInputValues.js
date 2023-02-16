const { idSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: '' };
};

// const validateName = (name) => {
//   const { error } = nameSchema.validate(name);
//   if (error) {
//     return {
//       type: 'IVALID_VALUE',
//       message: 'name length must be at least 5 characters long ',
//     };
//   }

//   return { type: null, message: '' };
// };

module.exports = {
  validateId,
};
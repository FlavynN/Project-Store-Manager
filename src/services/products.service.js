const { productModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const getProducts = async () => {
  const allProducts = await productModel.getAll();
  return { type: null, message: allProducts };
};

const getById = async (productId) => {
  const error = schema.validateId(productId);
  if (error.type) return error;

  const products = await productModel.getById(productId);
  if (!products) return { message: 'Product not found' };

  return products;
};

module.exports = {
  getProducts,
  getById,
};
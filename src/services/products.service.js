const { productModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const getProducts = async () => {
  const allProducts = await productModel.getAll();
  return { type: '', message: allProducts };
};

const getById = async (id) => {
  const error = schema.validateId(id);
  if (error.type) return error;

  const products = await productModel.getById(id);
  if (!products) return { message: 'Product not found' };

  return products;
};

const insertProduto = async (name) => {
  const newProductId = await productModel.insertProduct(name);
  const newProduct = await productModel.getById(newProductId);

  return { type: '', message: newProduct };
};

const updateProducts = async (name, id) => {
  const error = schema.validateId(id);
  if (error.type) return error;

  const IdToUpdate = await productModel.getById(id);
  if (!IdToUpdate) return { message: 'Product not found' };

  const updatedProducts = await productModel.updateById(name, id);
  return updatedProducts;
};

const removeProduct = async (id) => {
  const haveProduct = await productModel.getById(id);
  if (!haveProduct) return { type: 404, message: 'Product not found' };

  await productModel.removeProduct(id);

  return { type: null, message: '' };
};

module.exports = {
  getProducts,
  getById,
  insertProduto,
  updateProducts,
  removeProduct,
};
const { productsService } = require('../services');
const errorMap = require('../utils.js/errorMap');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);

  if (product.message) return res.status(404).json(product);

  return res.status(200).json(product);
};

const insertProduct = async (req, res) => {
  const product = req.body;
  const { message } = await productsService.insertProduto(product);

  res.status(201).json(message);
};

module.exports = {
  getAllProducts,
  getProduct,
  insertProduct,
};

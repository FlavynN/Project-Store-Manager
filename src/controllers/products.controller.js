const { productsService } = require('../services');
const errorMap = require('../utils.js/errorMap');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProduct,
};

const { salesService } = require('../services');
const errorMap = require('../utils.js/errorMap');

const getAllSales = async (_req, res) => {
  const { type, message } = await salesService.getSales();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getSalesById(id);

  if (sale.message) return res.status(404).json(sale);

  return res.status(200).json(sale);
};

module.exports = {
  getAllSales,
  getSalesById,
};
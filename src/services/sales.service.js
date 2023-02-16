const { salesModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const getSales = async () => {
  const allSales = await salesModel.getAllSales();
  return { type: null, message: allSales };
};

const getSalesById = async (saleId) => {
  const error = schema.validateId(saleId);
  if (error.type) return error;

  const sale = await salesModel.getSalesById(saleId);
  if (sale.length === 0) return { message: 'Sale not found' };

  return sale;
};
module.exports = {
  getSales,
  getSalesById,
};
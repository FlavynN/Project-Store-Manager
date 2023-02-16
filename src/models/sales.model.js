const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products AS SP
      INNER JOIN StoreManager.sales AS S ON S.id = SP.sale_id
      ORDER BY sale_id, product_id`,
  );

  return camelize(result);
};

const getSalesById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT S.date, SP.product_id, SP.quantity FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S ON S.id = SP.sale_id
    WHERE sale_id = ?`,
    [saleId],
  );
  return camelize(result);
};

module.exports = { getAllSales, getSalesById };
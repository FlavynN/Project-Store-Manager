const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result);
};

const getById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(result);
};

const insertProduct = async ({ name }) => {
  const [result] = await connection.execute(
    'INSERT INTO products (name) VALUES (?);',
    [name],
  );

  return result.insertId;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};
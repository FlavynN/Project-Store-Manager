const snakeize = require('snakeize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const getById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return result;
};

const insertProduct = async (product) => {
  const columns = Object.keys(snakeize(product)).join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const updateById = async (product, productId) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [product, productId],
  );
  const getProduct = await getById(productId);
  return getProduct;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateById,
};
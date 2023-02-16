const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/product.model')
const connection = require('../../../src/models/connection')
const { products, newProduct } = require('./mock/productsModel.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Recuperando a lista de produtos', async function () {

    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.getAll();
    expect(result).to.be.deep.equal(products);

  });

  it('Recuperando um produto a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    // Act
    const result = await productsModel.getById(1);
    // Assert
    expect(result).to.be.deep.equal(products[0]);
  });

  it('Cadastrando um produto', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    // Act
    const result = await productsModel.insertProduct(newProduct);
    // Assert
    expect(result).to.equal(42);
  });

  afterEach(function () {
    sinon.restore();
  });
});
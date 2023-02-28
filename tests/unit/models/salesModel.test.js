const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model')
const connection = require('../../../src/models/connection')
const { sales } = require('./mock/salesModel.mock');

describe('Testes de unidade do model de vendas', function () {
  it('Recuperando a lista de vendas', async function () {

    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await salesModel.getAllSales();
    expect(result).to.be.deep.equal(sales);

  });

  it('Recuperando uma venda a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([sales[0]]);
    // Act
    const result = await salesModel.getSalesById(1);
    // Assert
    expect(result).to.be.deep.equal(sales[0]);
  });


  afterEach(function () {
    sinon.restore();
  });
});
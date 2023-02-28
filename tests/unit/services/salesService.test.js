const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model')
const allSales = require('./mock/salesService.mock')


describe('Testes de unidade do service de sales', function () {
  describe('listagem de vendas', function () {
    it('Retorna a lista completa de vendas', async function () {

      sinon.stub(salesModel, 'getAllSales').resolves(allSales);
      const result = await salesService.getSales();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(allSales);
    });
  });

  it('retorna a venda com ID existente', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(allSales);
    const result = await salesService.getSalesById(1);

    expect(result.type).to.equal(allSales[0]);
  })

  afterEach(function () {
    sinon.restore();
  })

});
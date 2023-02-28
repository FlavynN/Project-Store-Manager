const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const salesController = require('../../../src/controllers/sales.controller');
const { sales } = require('./mock/salesController.mock');
const { expect } = chai;
chai.use(sinonChai);


describe('Teste de unidade do salesController', function () {

  describe('Listagem de Sales', function () {
    it('Retorna a lista completa de vendas', async function () {

      const res = {};

      const req = {};
      res.status = sinon.stub().returns(res);

      res.json = sinon.stub().returns();

      sinon
        .stub(salesModel, 'getAllSales')
        .resolves(sales);


      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });

    it('Retorna a venda selecionada pelo Id', async function () {

      const res = {};
      const req = { params: { id: 1 } }

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSalesById').resolves(sales[0]);

      await salesController.getSalesById(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });


  });
});
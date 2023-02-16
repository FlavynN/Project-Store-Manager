const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/product.model');
const productsController = require('../../../src/controllers/products.controller');
const { allProducts } = require('./mock/productsController.mock');

const { expect } = chai;
chai.use(sinonChai);


describe('Teste de unidade do productsController', function () {

  describe('Listagem de Produtos', function () {
    it('Retorna a lista completa produtos', async function () {

      const res = {};

      const req = {};
      res.status = sinon.stub().returns(res);

      res.json = sinon.stub().returns();

      sinon
        .stub(productsModel, 'getAll')
        .resolves(allProducts);


      await productsController.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });

    it('Retorna Produto selecionado pelo Id', async function () {

      const res = {};
      const req = { params: { id: 1 } }

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getById').resolves(allProducts[0]);

      await productsController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });


  });
});
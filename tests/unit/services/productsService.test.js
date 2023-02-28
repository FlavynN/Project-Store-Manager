const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/product.model')
const allproducts = require('./mock/productService.mock')

describe('Testes de unidade do service de produtos', function () {
  describe('listagem de products', function () {
    it('Retorna a lista completa produtos', async function () {

      sinon.stub(productsModel, 'getAll').resolves(allproducts);
      const result = await productsService.getProducts();


      expect(result.message).to.deep.equal(allproducts);
    });
  });

  it('retorna um erro caso o produto não exista', async function () {

    sinon.stub(productsModel, 'getById').resolves(undefined);
    const result = await productsService.getById(1);

    expect(result.message).to.equal('Product not found');
  });

  it('retorna o produto com ID existente', async function () {
    sinon.stub(productsModel, 'getById').resolves(undefined);

    const result = await productsService.getById(1);

    expect(result.type).to.equal(undefined);
    expect(result.message).to.deep.equal('Product not found');
  });

  it('retorna produto caso Id correto', async function () {
    sinon.stub(productsModel, 'getById').resolves(allproducts);
    const result = await productsService.getById(1);

    expect(result.message).to.equal(allproducts[0]);
  })



  afterEach(function () {
    sinon.restore();
  });

});
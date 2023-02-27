const express = require('express');

const { productsController } = require('../controllers');
const { productValidation } = require('../middlewares/productValidation');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);
router.post('/', productValidation, productsController.insertProduct);
router.put('/:id', productValidation, productsController.updateProducts);

module.exports = router;
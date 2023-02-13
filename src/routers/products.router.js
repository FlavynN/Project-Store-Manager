const express = require('express');

const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProduct);

module.exports = router;
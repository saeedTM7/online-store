var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');
var authMiddleware = require('../middleware/authMiddleware');

router.get('/', productController.getAllProducts);
router.post('/', authMiddleware, productController.createProduct);

module.exports = router;

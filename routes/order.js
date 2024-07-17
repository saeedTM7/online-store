var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController');
var authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getUserOrders);

module.exports = router;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

dotenv.config();

var authRouter = require('./routes/auth');
var productRouter = require('./routes/product');
var orderRouter = require('./routes/order');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

module.exports = app;

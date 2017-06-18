// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var SmoothScroll = require('./smoothScroll');
var Header = require('../_modules/header/header');
var Footer = require('../_modules/footer/footer');
var Home = require('./home');
var Product = require('../_modules/product/product');
var Calculator = require('../_modules/calculator/calculator');
var Shopcart = require('../_modules/shopcart/shopcart');


$(function() {
    require('../../bower_components/slick-carousel/slick/slick');
    new SmoothScroll();
    new Header();
    new Footer();
    new Home();
    new Product();
    new Calculator();
    new Shopcart();
    console.log('Welcome to Los Hermanos!');
});

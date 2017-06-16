// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var Header = require('../_modules/header/header');
var Footer = require('../_modules/footer/footer');
var Home = require('./home');

$(function() {
    require('../../bower_components/slick-carousel/slick/slick');
  new Header();
  new Footer();
  new Home();
  console.log('Welcome to Los Hermanos!');
});

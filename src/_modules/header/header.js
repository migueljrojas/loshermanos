'use strict';
// Constructor
var Header = function() {
    var header = $('.Header');
    var shopCart = $('._shop-cart');

    $('._hamburguer').on('click', function(){
        header.toggleClass('-open');
        $('body').toggleClass('-hideOverflow');
    });

    shopCart.on('click', function(){
        $(this).toggleClass('-open');
    });

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('-ontop');
            } else {
                header.addClass('-ontop');
            }
        });
    });
};

module.exports = Header;

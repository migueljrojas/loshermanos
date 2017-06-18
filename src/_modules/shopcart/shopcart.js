'use strict';

// Constructor
var Shopcart = function() {

    var shopCart = $('._shopcart');
    var trigger = shopCart.find('._header');

    trigger.click(function(){
        shopCart.toggleClass('-open');
        $('body').toggleClass('-hideOverflow');
    });

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        var shopCartTop = shopCart.get(0).getBoundingClientRect().top;
        var shopCartBottom = $('footer').get(0).getBoundingClientRect().top;

        if (shopCartBottom <= 750) {
    	    shopCart.addClass('-bottom');
    	} else {
    	    shopCart.removeClass('-bottom');
    	}

        if ( scroll <= 120 ) {
            shopCart.removeClass('-fixed');
        }

        if ( shopCartTop <= 110 ) {
            shopCart.addClass('-fixed');
        }
    });
};

module.exports = Shopcart;

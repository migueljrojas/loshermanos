'use strict';

// Constructor
var Product = function() {

    var products = $('._product');

    products.each( function(){

        var trigger = $(this).find('._desc-trigger');
        var caption = $(this).find('._caption');
        var triggerDisplace = caption.height() + 24;
        var open = false;

        trigger.click(function(){
            caption.toggleClass('-open');

            if ( !open ) {
                $(this).css('transform', 'translateY(-' + triggerDisplace + 'px) rotate(-45deg)');
            } else {
                $(this).css('transform', 'translateY(0) rotate(0)');
            }

            open = !open;
        });
    });
};

module.exports = Product;

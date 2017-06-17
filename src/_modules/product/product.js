'use strict';

// Constructor
var Product = function() {

    var products = $('._product');

    products.each( function(){
        var calc = $(this).find('._calculator');
        var minus = $(this).find('._minus');
        var plus = $(this).find('._plus');
        var quantityField = $(this).find('._unit');
        var quantity = quantityField.val();
        var quantity = parseFloat(quantity);
        var amountField = $(this).find('._amount');
        var amount = amountField.val();
        var price = $(this).find('._price').data('price');
        var price = parseFloat(price).toFixed(2);
        var trigger = $(this).find('._desc-trigger');
        var caption = $(this).find('._caption');
        var triggerDisplace = caption.height() + 24;
        var open = false;
        console.log(triggerDisplace);

        trigger.click(function(){
            caption.toggleClass('-open');

            if ( !open ) {
                $(this).css('transform', 'translateY(-' + triggerDisplace + 'px) rotate(-45deg)');
            } else {
                $(this).css('transform', 'translateY(0) rotate(0)');
            }

            open = !open;
        });

        minus.click(function(){
            if ( quantity > 0 ) {
                quantity = quantity - 1;
                quantityField.val(quantity);
                quantityField.trigger('change');
            } else {
                return false;
            }
        });

        plus.click(function(){
            if ( quantity < 10 ) {
                quantity = quantity + 1;
                quantityField.val(quantity);
                quantityField.trigger('change');
            } else {
                return false;
            }
        });

        quantityField.change(function(){
            amount = price * quantity;
            amount = parseFloat(amount)
                     .toFixed(2)
                     .toString()
                     .replace('.', ',');
            amount = '$' + amount;
            amountField.val(amount)
        });
    });
};

module.exports = Product;

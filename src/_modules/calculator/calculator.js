'use strict';

// Constructor
var Calculator = function() {

    var calculators = $('._calculator');

    calculators.each( function(){

        var minus = $(this).find('._minus');
        var plus = $(this).find('._plus');
        var quantityField = $(this).find('._unit');
        var quantity = quantityField.val();
        var quantity = parseFloat(quantity);
        var amountField = $(this).find('._amount');
        var amount = amountField.val();
        var price = $(this).find('._itemPrice').val().replace(',','.');
        var price = parseFloat(price).toFixed(2);

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

module.exports = Calculator;

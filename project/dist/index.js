"use strict";
var input1 = document.querySelector('[data-input="number1"]');
var input2 = document.querySelector('[data-input="number2"]');
var button = document.querySelector('[data-button]');
var sum = function (n1, n2) {
    return n1 + n2;
};
button.addEventListener('click', function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});

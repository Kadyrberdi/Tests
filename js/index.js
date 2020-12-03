'use strict';
const form = document.querySelector('.order'),
    phone = document.querySelectorAll('#phone'),
    btn = document.querySelector('.order__btn');

phone.forEach(elem => {
    const validator = function () {
        elem.value = elem.value.replace(/[^0-9+]/ig, '');
    };
    elem.addEventListener('input', validator);
});
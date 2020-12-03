'use strict';
const form = document.querySelector('.order'),
    phone = document.querySelectorAll('#phone'),
    btn = document.querySelector('.order__btn');
    
//валидация
phone.forEach(elem => {
    const validator = function () {
        elem.value = elem.value.replace(/[^0-9+]/ig, '');
    };
    elem.addEventListener('input', validator);
});

//отправка к серверу
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  let body = {};
  
  formData.forEach((val, key) => {
        body[key] = val;
      }); 
      
    postData(body, () => {
      alert('Спасибо! Мы скоро с вами свяжемся!');
    }, (error) => {                
      alert('Что то пошло не так ...');
      console.error(error);
    });
    
    phone[0].value = '';
});

const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
        return
    }
    if (request.status === 200) {
        outputData();
    } else {
        errorData(request.status);
    }
    });

    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
};
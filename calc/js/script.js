'use strict';

const inputEur = document.querySelector('#eur');
const inputUsd = document.querySelector('#usd');
const inputGbp = document.querySelector('#gbp');

inputEur.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputEur.value * data.current.usd).toFixed(2);
            inputGbp.value = (+inputEur.value * data.current.gbp).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
            inputGbp.value = 'Что-то пошло не так';
        }
    });
});

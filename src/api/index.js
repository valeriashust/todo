"use strict";
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url, param) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        if (param) {
            xhr.open("POST", url);
            xhr.onload = () => resolve('success');
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(param);
        }
        else {
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        }
    }));
}

fetch('http://www.nbrb.by/API/ExRates/Currencies', JSON.stringify({text: 'wash the dishes'})).then(function (value) {
    console.log(value)
}, function (reason) {
    console.log(reason)
});

fetch('http://www.nbrb.by/API/ExRates/Currencies').then(function (value) {
    console.log(value)
}, function (reason) {
    console.log(reason)
});

"use strict";
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url, param) {
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();

          xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();


    }));
}

fetch('./package.json').then(function (value) {
    console.log(value)
}, function (reason) {
    console.log(reason)
});

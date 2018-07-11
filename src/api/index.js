"use strict";

import responses from "./mock-responses.json";


export default fetch = (url, param) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            switch (url) {
                case '/todos': {
                    resolve(responses.todos)
                }
                case '/todos/active': {
                    resolve(responses.todos.active)
                }
                case '/todos/complete': {
                    resolve(responses.todos.complete)
                }
            }
        }, 5000);


    }));
}


/*
fetch('/todos').then(function (value) {
    console.log(value)
}, function (reason) {
    console.log(reason)
});

fetch('/todos/complete').then(function (value) {
    console.log(value)
}, function (reason) {
    console.log(reason)
});*/

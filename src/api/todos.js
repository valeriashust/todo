
import fetch from './index';

export function add(todo) {
    return fetch('/todos', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: todo
    })
}

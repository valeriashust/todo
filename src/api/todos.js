
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
 export function toggle(state) {
    return fetch('/todos', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: state
    })

 }

export function deleteItem(todo) {
    return fetch('/todos', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: todo
    })

}

export function update(state) {
    return fetch('/todos', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: state
    })

}

export function visibilityFilter(filter) {
    return fetch('/visibility-filter', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: filter
    })
}

export function getAll() {
    return fetch('/todos', {
        method: 'get'
    })
}
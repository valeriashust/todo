import * as api from '../api/todos.js'
import {store} from '../index'

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = todo => ({
    type: 'ADD_TODO',
    todo
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});

export const updateTodo = (text, id) => ({
    type: 'UPDATE_TODO',
    text,
    id
});

export function addingTodo(todo) {
    return function (dispatch) {
        return api.add(todo).then(response => {
            console.log(response);
            dispatch(addTodo(response))
        })
    }
}

export function togglingTodo(id) {
    return function (dispatch) {
        dispatch(toggleTodo(id));
        let newState = store.getState();
        return api.toggle(newState).then(response => {
            console.log(response);
        })
    }
}

export function deletingTodo(id) {
    return function (dispatch) {
        let state = store.getState();
        let todoForDeleting = state.todos.find((todo) => {
            if (todo.id === id) return todo; else return {}
        });
        return api.deleteItem(todoForDeleting).then(response => {
            console.log(response);
            dispatch(deleteTodo(id));
        })
    }
}

export function updatingTodo(text, id) {
    return function (dispatch) {
        dispatch(updateTodo(text, id));
        let newState = store.getState();
        return api.update(newState).then(response => {
            console.log(response);
        })
    }
}

export function settingVisibilityFilter(filter) {
    return function (dispatch) {
        return api.visibilityFilter(filter).then(response => {
            console.log(response);
            dispatch(setVisibilityFilter(filter));
        })
    }
}

export function gettingAllTodos() {
    return function (dispatch) {
        return api.getAll().then(response => {
            console.log(response);
            response.map(todo => dispatch(addTodo(todo)));
        })
    }
}


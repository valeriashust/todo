import * as api from '../api/todos.js'
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

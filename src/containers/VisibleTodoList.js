import { connect } from 'react-redux'
//import { toggleTodo } from './actions'
import ListOfItems from '../components/ListOfItems'
import React, {Component} from "react";
//import { VisibilityFilters } from './actions'
import {Item} from "../components/App"

/*const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};*/



const mapStateToProps = state => ({
    items: state
});

/*const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});*/

export default connect(mapStateToProps)(ListOfItems)
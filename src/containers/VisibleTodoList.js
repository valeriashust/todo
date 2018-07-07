import {connect} from 'react-redux'
import ListOfItems from '../components/ListOfItems'
import React from "react";
//import { VisibilityFilters } from './actions'


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

export default connect(mapStateToProps)(ListOfItems)
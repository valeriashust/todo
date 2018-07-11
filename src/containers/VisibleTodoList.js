import {connect} from 'react-redux'
import ListOfItems from '../components/ListOfItems'
import {deleteTodo, toggleTodo, updateTodo, VisibilityFilters} from '../actions/actions'


export const getVisibleTodos = (todos, filter) => {
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
};


const mapStateToProps = state => (
    {todos: getVisibleTodos(state.todos.list, state.visibilityFilter)}

);

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    updateTodo: (text, id) => dispatch(updateTodo(text, id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems)
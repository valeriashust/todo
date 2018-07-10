import {combineReducers} from 'redux'
import todos from '../reducers/todos'
import visibilityFilter from '../reducers/visibilityFilter'


const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp
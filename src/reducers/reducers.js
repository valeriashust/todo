import {combineReducers} from 'redux'
import todos from '../reducers/todos'
import visibilityFilter from '../reducers/visibilityFilter'
import loading from './loading'


const todoApp = combineReducers({
    visibilityFilter,
    todos, loading
});

export default todoApp
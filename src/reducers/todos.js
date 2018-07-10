import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO} from "../actions/actions";

function todos(state = {list: [], currentId: 0}, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state.list,
                {
                    id: state.currentId++,
                    text: action.text,
                    completed: false,
                },

            ];
        }
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case UPDATE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            );
        default:
            return state
    }
}

export default todos;
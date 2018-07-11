import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO} from "../actions/actions";


function todos(state = {list: [], currentId: 0}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: state.currentId,
                        text: action.text,
                        completed: false,
                    },

                ],
                currentId: state.currentId + 1,
            }
                ;
        case
        TOGGLE_TODO: {
            const newList = state.list.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
            return {
                ...state,
                list: newList
            };
        }
        case
        DELETE_TODO: {
            const newList = state.list.filter(todo => todo.id !== action.id);
            return {...state, list: newList};
        }
        case
        UPDATE_TODO: {
            const newList = state.list.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            );
            return {...state, list: newList}
        }
        default:
            return state
    }
}

export default todos;
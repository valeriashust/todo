import {SET_LOADING} from "../actions/actions";

function loading(state = false, action) {
    switch (action.type) {
        case SET_LOADING: {
            return !state;
        }
        default:
            return state
    }
}

export default loading;
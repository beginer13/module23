import { AUTHENTICATION_OPEN, AUTHENTICATION_CLOSE } from '../actions/authenticationActions'

const initialState = {
    authenticationOpened: false
}

function rootReducer(state = initialState, action) {
    console.log(action)

    switch (action.type) {
        case AUTHENTICATION_OPEN: return { ...state, authenticationOpened: true };
        case AUTHENTICATION_CLOSE: return { ...state, authenticationOpened: false };

        default: return state;
    }
}

export default rootReducer;
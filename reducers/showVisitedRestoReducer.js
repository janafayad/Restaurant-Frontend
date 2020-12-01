import { POST_VISITED } from '../constantsUsed';


const initialState=false;

const showVisitedRestoReducer = (state=initialState, action) => {
    switch (action.type) {
        case POST_VISITED:
            return !state;
        default:
            return state;
    }
}

export default showVisitedRestoReducer;
import { FETCH_RESTO } from '../constantsUsed';

const initialState=[];

const restoReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_RESTO:
            return action.data;

        default:
            return state;
    }
}

export default restoReducer;
import {SHOW_RESTOS, SHOW_SEARCHED} from '../constantsUsed';

const initialState=true;

const showReducer=(state=initialState,action)=>{
    switch (action.type){
        case SHOW_RESTOS:
            return true;
        case SHOW_SEARCHED:
            return false;
        default:
            return state;
    }
}

export default showReducer;
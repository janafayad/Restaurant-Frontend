import { LOADING } from '../constantsUsed';

const initialState=false;

const loadingReducer = (state = initialState,action)=>{
    switch(action.type){
        case LOADING:
            return action.value;
        default:
        return state;
    }
}

export default loadingReducer;
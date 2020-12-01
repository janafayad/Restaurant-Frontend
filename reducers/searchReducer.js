import {FETCH_SEARCH} from '../constantsUsed';

const initialState=[];

const searchReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_SEARCH:
            return action.value;
        default:
            return state;
    }
}

export default searchReducer;
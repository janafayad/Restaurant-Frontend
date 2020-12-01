import {FETCH_VISITED} from '../constantsUsed';

const initialState=[];

const visitedRestoReducer=(state=initialState,action)=>{
    switch (action.type){
        case FETCH_VISITED:
            return action.data;
        default:
            return state;
    }
}

export default visitedRestoReducer;
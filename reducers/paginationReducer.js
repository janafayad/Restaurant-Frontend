import {PAGINATION} from '../constantsUsed';

const initialState=-1;

const paginationReducer=(state=initialState,action)=>{
    switch (action.type){
        case PAGINATION:
            return action.value;
        default:
        return state;
    }
}

export default paginationReducer;
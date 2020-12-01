import {ERROR, CLEAR} from '../constantsUsed';

const initialState = {
    warn:{
        msg:'',
        barOpen: false
    }
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR:
            return {
                info: {
                    msg : action.msg,
                    barOpen : true
                }
            };
        case CLEAR:
            return {
                info : {
                    msg : "",
                    barOpen: false
                }
            };
        default:
            return state;
    }
}

export default errorReducer;


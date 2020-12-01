import {ERROR, CLEAR} from '../constantsUsed';

export const printError=(err) => {
    return{
        type:ERROR,
        err:err
    }
}

export const clear=()=>{
    return{
        type: CLEAR
    }
}
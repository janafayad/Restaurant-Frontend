import {DEMAND_RESTO, FETCH_RESTO} from '../constantsUsed';

export const demandAllRestos = () =>{
    return{
        type:DEMAND_RESTO
    }
}

export const fetchAllRestos = (data) => {
    return{
        type: FETCH_RESTO,
        data: data
    }
}
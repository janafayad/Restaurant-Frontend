import {FETCH_SEARCH, DEMAND_SEARCH} from '../constantsUsed';

export const fetchSearchedRestos=(data)=>{
    return{
        type: FETCH_SEARCH,
        data: data
    }
}

export const demandSearchedRestos=(data)=>{
    return{
        type: DEMAND_SEARCH,
        data: data
    }
}
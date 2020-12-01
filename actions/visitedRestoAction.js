import {FETCH_VISITED, DEMAND_VISITED} from '../constantsUsed';

export const fetchVisited = (data) => {
    return({
        type: FETCH_VISITED,
        data:data
    })
}

export const demandVisited = () => {
    return({
        type: DEMAND_VISITED
    })
}
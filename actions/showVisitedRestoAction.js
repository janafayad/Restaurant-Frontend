import {VISITED, POST_VISITED} from '../constantsUsed';

export const visitedResto = (resto) => {
    return{
        type: VISITED,
        resto : resto
    }
}

export const visited = () => {
    return{
        type : POST_VISITED
    }
}
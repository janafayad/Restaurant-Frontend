import {SHOW_RESTOS, SHOW_SEARCHED} from '../constantsUsed';

export const showAllRestos = () => {
    return({
        type: SHOW_RESTOS,
    })
}

export const showSearched = () => {
    return({
        type: SHOW_SEARCHED,
    })
}


import { LOADING } from '../constantsUsed';

export const loadingAction=(boolLoad) => {
    return{
        type: LOADING,
        boolLoad:boolLoad
    }
}


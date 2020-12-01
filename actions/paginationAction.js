import { PAGINATION } from '../constantsUsed';

export const pagination = (pageNbr)=>{
    return{
        type: PAGINATION,
        pageNbr: pageNbr
    }
}
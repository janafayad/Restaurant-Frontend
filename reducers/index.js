import {combineReducers} from 'redux';
import restoReducer from './restoReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import paginationReducer from './paginationReducer';
import routingReducer from './routingReducer';
import showVisitedRestoReducer from './showVisitedRestoReducer';
import searchReducer from './searchReducer';
import showReducer from './showReducer';
import visitedRestoReducer from './visitedRestoReducer';

const rootReducer= combineReducers({
    restoReducer,
    errorReducer,
    loadingReducer,
    paginationReducer,
    routingReducer,
    showVisitedRestoReducer,
    searchReducer,
    showReducer,
    visitedRestoReducer
});

export default rootReducer;
import { takeLatest, call, put} from 'redux-saga/effects';
import { DEMAND_RESTO,DEMAND_VISITED,VISITED,DEMAND_SEARCH } from './constantsUsed';
import { getAll ,postVisited,getAllVisits} from './API';
import { loadingAction } from './actions/loadingAction';
import { fetchAllRestos } from './actions/restoAction';
import { fetchVisited } from './actions/visitedRestoAction';
import { visited } from './actions/showVisitedRestoAction';
import { fetchSearchedRestos } from './actions/searchAction';
import { printError } from './actions/errorAction';

function* searchAsync(action){
    try {
        yield put(loadingAction(true));
        const restos = yield call (getAll,action.data);
        let search=0;
        if (action.data.name === ""){
         search = getDataSearchByType(restos,action.data.type);
         yield put(fetchSearchedRestos(search));

       }
       else{
            search = getDataSearchByName(restos,action.data.name);
             yield put(fetchSearchedRestos(search));

        }
        yield put(loadingAction(false));
    }
    catch (e){
          console.log("Error: " + e);
          yield put(loadingAction(false));
          yield put(printError("Error"))
    }


}

export function* syncSearch(){
    yield takeLatest(DEMAND_SEARCH, searchAsync);
 }



function* restaurantsAsync(action){
    try {
    	yield put(loadingAction(true));
        const restos = yield call (getAll);
        yield put(fetchAllRestos(restos));
        yield put(loadingAction(false));
    }
    catch (error){
        console.log("error :"+error);
        yield put(loadingAction(false));
        yield put(printError("Error"));
    }
}
export function* syncAll(){
    yield takeLatest(DEMAND_RESTO, restaurantsAsync);
}

function* addVisitedAsync(action){
    try {
        yield call (postVisited,action.restaurant);
        yield put(visited);

    }
    catch (e){
        console.log("Error :"+e);
    }
}

export function* syncCheck(){
    yield takeLatest(VISITED, addVisitedAsync);
}



function* allVisitedAsync(){
    try {
        yield put(loadingAction(true));
        const restos = yield call (getAll);
        const visit= yield call(getAllVisits);
        console.log("Syncing");
        console.log(visit);
        let arr=[];
        for(let rest of restos){
            let obj={};
            for (let v of rest.visits){
                obj=v;
                obj["name"]=rest.restaurantName;
                let str=String(obj.date);
                let replace=new Date(Date.parse(str));
                let dateTimezone=replace.toUTCString();
                let date=dateTimezone.slice(0,dateTimezone.length-4);
                obj["dateFormat"]=date;
                arr.push(obj);
            }
         }
        console.log("Syncing");
        console.log(arr);
        yield put(fetchVisited(arr));
        yield put(loadingAction(false));

    }
    catch (e){
        console.log("error :"+e);
        yield put(loadingAction(false));
        yield put(printError("Error"));

    }
}

export function* syncVisited(){
    yield takeLatest(DEMAND_VISITED, allVisitedAsync);
}


 const getDataSearchByType=(allRest,type)=>{
     let dataByType=[];
     let obj={};

     for(let rest of allRest){
         if((rest.restaurantType).toLowerCase()===type){
             obj=rest;
             dataByType.push(obj);
         }
     }

     return(dataByType);
 }

  const getDataSearchByName=(allRest,name)=>{
     let dataByName=[];
     let obj={};
     let lower=name.toLowerCase();
     for(let rest of allRest){
         if((rest.restaurantName).toLowerCase()===lower){
             obj=rest;
             dataByName.push(obj);
         }
     }
     return(dataByName);
 }
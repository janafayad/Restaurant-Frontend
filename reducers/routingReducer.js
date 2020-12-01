import {ROUTE_TO_P1,ROUTE_TO_P2} from '../constantsUsed';

const initialState=true;

const routingReducer=(state=initialState,action)=>{
	switch(action.type){
		case ROUTE_TO_P1:
			return true;
		case ROUTE_TO_P2:
			return false;
		default:
			return state;

	}
}

export default routingReducer;

import Resto from './Resto';
import { demandAllRestos } from '../actions/restoAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  choosedResto from './choosedResto';

export default function Container(){
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(demandAllRestos())
	},[])

	return(
		<div>
			<Resto/>
		</div>

		)
}

import React from 'react';
import VisitedRestos from './VisitedRestos';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Page2(){
	return(
		<div>
			<AppBar position="static" >
				<Toolbar position="static" style={{justifyContent:"center"}}>
					Visited Restaurants
				</Toolbar>
			</AppBar>
			<br/>
			<VisitedRestos/>
		</div>

	)
}


import { React, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { pagination } from '../actions/paginationAction';
import { visitedResto } from '../actions/showVisitedRestoAction';
import Dialog from '@material-ui/core/Dialog';


import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


export default function Resto(){

    const dispatch = useDispatch();

    const allRestaurants = useSelector((state) => state.restoReducer);

	const loading=useSelector((state)=> state.loadingReducer);

	const show =useSelector((state)=>state.showReducer)

	const searchedRest=useSelector((state)=>state.searchReducer);

	let restaurants=[];
	if (show === true){
        restaurants = allRestaurants;
    }else{
        restaurants = searchedRest;
        dispatch(pagination(1))
    }

	const currentPageNumb=useSelector((state)=>state.paginationReducer);
	const [nbRestPerPage]=useState(4);

	const indexLastRest = currentPageNumb * nbRestPerPage;
    const indexOfFirstResto = indexLastRest - nbRestPerPage;
    const currentRestaurants = restaurants.slice(indexOfFirstResto, indexLastRest);

	const paginate = (event, value) => {
      dispatch(pagination(value))
    }



    const actionChange = (e) => {
         if (e.target.checked){
            const today =+ new Date();

            let obj={};
            for(let rest of restaurants){
              if(rest.id===e.target.value){
                  obj=rest;
              }
            }
            let restaurant = { "date": today ,"restaurant": obj} ;
            dispatch(visitedResto(restaurant));
        }
    }
    const[open,setOpen] =useState(false);
  	const [currentRest,setCurrentRest]= useState({});
  	const clickOpen = () => {
      setOpen(true);
    };
  	const handleCurrent=(resto)=>{
    	setCurrentRest(resto)
 	 }
  	const close=()=>{setOpen(false)};




	if(loading){
		return(
			<td>Loading...</td>
			)
	}else{
		return(

		  <div>
			  <div>
				  <Grid container >
					  {currentRestaurants.map(rest=>(
						  <Grid item align="center" xs={12} sm={6} key={rest.id}>
							  <Card >
								  <CardActionArea onClick={ () =>{ clickOpen();
																 handleCurrent(rest);}}>

								  </CardActionArea>
								  <CardActions >
									  <Typography  variant="h5">
										    {rest.nameResto}
									  </Typography>
									  <FormControl component="fieldset">
                        	<FormGroup aria-label="position" row>
                            	<FormControlLabel id={rest.id} value={rest.id} control={ <Checkbox/> } label="Tick if visited" labelPlacement="start" onChange={actionChange} />
                        	</FormGroup>
                    </FormControl>
								  </CardActions>
							  </Card>
						  </Grid>
					  ))}
				  </Grid>
			  </div>

			<Grid container spacing={0} direction="column" alignItems="center" justify="center">
				<Grid item xs={12}>
            <Pagination count={Math.ceil(restaurants.length / nbRestPerPage)} onChange={paginate}  showFirstButton showLastButton variant="outlined" shape="rounded"/>
        </Grid>
			</Grid>
			<Dialog onClose={close} maxWidth="lg" aria-labelledby="customized-dialog-title" open={open}>

                	<Grid container spacing={5}>


                	<Grid item xs={12} sm={4}>
                  		<Typography variant="h4" component="h4">
                    			{currentRest.nameResto}
                  		</Typography>
                  			<br/>
                  		<Typography >
                    		Type: {currentRest.typeResto}
                  		</Typography>
                  			<br/>
                  		<Typography gutterBottom>
                    		Average Cost for Two: ${currentRest.costForTwo}
                  		</Typography>
                  			<br/>
                  		<Typography gutterBottom>
                    		Address: {currentRest.addressResto}
                  		</Typography>
                  			<br/>
                  		<Typography gutterBottom>
                    		Phone Number: {currentRest.phoneNumber}
                  		</Typography>
                  			<br/>
                	</Grid>
            	</Grid>

    	</Dialog>
	</div>
		)
	}
}

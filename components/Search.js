import React from 'react';
import {useDispatch} from 'react-redux';
import { demandAllRestos } from '../actions/restoAction';
import { demandSearchedRestos } from '../actions/searchAction';
import {SHOW_RESTOS,SHOW_SEARCHED} from '../constantsUsed';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = () => {
  const dispatch=useDispatch();


  const submit=()=>{
    let name = document.getElementById("nameId");
    let type = document.getElementById("typeId");
    console.log(name.value)
    console.log(type.value)
    let data = {name: name.value , type: type.value};

    if (name.value === "" && (type.value === "" || type.value=== "all")){
      dispatch({type: SHOW_RESTOS});
      dispatch(demandAllRestos());

    }
    else{
      dispatch({type: SHOW_SEARCHED});
      dispatch(demandSearchedRestos(data));
    }

  }
	return (
    <div >
      <AppBar position="static" color="primary">
        	<Toolbar>
      			<Grid container >
        			<Grid item xs={12} sm={4}>
          				<Grid container>
            				<TextField label="Search" id = "nameId" fullWidth variant="outlined" style={{backgroundColor:"white"}} color="primary" size="medium"/>
          				</Grid>
        			</Grid>

        				<Grid item xs={12} sm={4}>
          					<Grid container justify="center">
            					<FormControl style={{backgroundColor:"white"}} variant="outlined" >
              							<InputLabel >Types</InputLabel>
                							<Select native label="Type" id = "typeId">
                  								<option aria-label="None" />
                  								<option value={'all'}>All Types</option>
                  								<option value={'lebanese'}>Lebanese</option>
                  								<option value={'italian'}>Italian</option>
                  								<option value={'american'}>American</option>
                							</Select>
      							  </FormControl>
                    </Grid>
        				</Grid>

        				<Grid item xs={12} sm={4}>
          					<Grid container justify="center">
            					<Button onClick={submit} variant="contained" color="secondary" position="center" size="large" >
            						<SearchIcon></SearchIcon>
            						Search
            					</Button>
          					</Grid>
        				</Grid>
      			</Grid>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;
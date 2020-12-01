import { useState } from 'react';
import {useSelector} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';



	const styles = (theme) => ({
  		root: {
    		margin: 0,
    		padding: theme.spacing(3),
  		}

	});
	const Content = withStyles((theme) => ({
  		root: {
    			padding: theme.spacing(2),
  				},
		}))(MuiDialogContent);

	const Title = withStyles(styles)((props) => {
  	  const { children, classes, onClose, ...other } = props;
  		return (
    		<MuiDialogTitle disableTypography className={classes.root} {...other}>
      		<Typography variant="h6"> { children }</Typography>
          {onClose ? (<IconButton aria-label="close" >
            <CloseIcon />
          </IconButton>) : null}
        </MuiDialogTitle>
  		      );
	    });

 export default function ModalDialog(){

  const[open,setOpen] =useState(false);
  const [currentRest,setCurrentRest]= useState({});
  const clickOpen = () => {
      setOpen(true);
    };
  const handleCurrent=(resto)=>{
    setCurrentRest(resto)
  }
  const close=()=>{setOpen(false)};
  const allRestaurants = useSelector((state) => state.callRestaurantsReducer);
	return(

	<Dialog onClose={close} maxWidth="lg" aria-labelledby="customized-dialog-title" open={open}>
        <Title id="customized-dialog-title" onClose={close}>
        </Title>
          <Content>

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

        </Content>
    </Dialog>

	)
 }

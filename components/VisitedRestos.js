import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { DEMAND_VISITED } from '../constantsUsed';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles,makeStyles } from '@material-ui/core/Styles';

const style= makeStyles({
    grid:{
        width:'70%',
        margin:'0px'
    }
})

const Cell = withStyles((theme) => ({
        head: {
                backgroundColor: "#eceff1",
                color: "black",
                },
         body: {
                fontSize: 14,
                },
        }))(TableCell);

const Row =withStyles((theme)=>({
    root: {
        '&:nth-of-type(odd)' : {
        backgroundColor:'white',
            },
        },
    }))(TableRow);

export default function VisitedRestos(){
    //const classes=style()
    const loading=useSelector((state) => state.loadingReducer)
    const visit = useSelector((state) => state.visitedRestoReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: DEMAND_VISITED})
    }, []);


    if(loading){
        return(
            <td>Loading...</td>
            )}
    else{

	    return(

		    <div>
                 <Grid container justify="center">
                    <Grid item xs={12} sm={6} align="center">
                	    <TableContainer component={Paper}>
                    	    <Table aria-label="customized table">
                        	    <TableHead>
                        		    <TableRow>
                        			    <Cell align="center"> Name </Cell>
                        			    <Cell align="center"> Visit Date </Cell>
                                    </TableRow>
                        	    </TableHead>
                        	        <TableBody>
                                        {visit.map(log=>(
                                            <Row key={log.id}>
                                                <Cell align="center">
                                                        {log.name}
                                                </Cell>
                                                <Cell align="center">
                                                        {log.dateFormat}
                                                </Cell>
                                            </Row>
                                        ))}
                            	    </TableBody>
                    	        </Table>
                	    </TableContainer>
                    </Grid>
                </Grid>
            </div>

		)}
}

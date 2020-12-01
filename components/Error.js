import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import Alert from '@material-ui/lab/Alert';

import { clear } from "../actions/errorAction";

export default function Error() {
  const dispatch = useDispatch();

  const stateError = useSelector(
    state => state.errorReducer
  );

  function handleClose() {
    dispatch(clear());
  }

  return (
    <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={stateError.info.barOpen} autoHideDuration={6000} onClose={handleClose} aria-describedby="client-snackbar">
           <Alert onClose={handleClose} severity="error">{stateError.info.msg}</Alert>
    </Snackbar>
  );
}

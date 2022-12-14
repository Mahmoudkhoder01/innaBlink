import { Fragment } from "react";
import classes from './callus.module.css';

const CallUs = props =>{
    return(
        <Fragment>
            <div className={classes.horizontalLigne}></div>
            <div className={classes.calldiv}>
                +971 55 486 3364
            </div>
        </Fragment>
    )
}

export default CallUs;
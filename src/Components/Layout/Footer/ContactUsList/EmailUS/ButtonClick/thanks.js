import { Fragment } from "react";
import classes from './thanks.module.css';

const Thanks = props =>{
    return (
        <Fragment>
            <div className={`${classes.thanksDiv} ${props.className}`}>
                <p className={classes.text}>Thank you very much for sending tour query, we will get back to you as soon as possible.
                <img src={process.env.PUBLIC_URL + '/Assests/imageemailsent.png'}></img></p> 
            </div>
        </Fragment>
    )
}

export default Thanks;
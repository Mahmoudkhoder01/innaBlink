import { Fragment, useState } from "react";
import classes from './emailus.module.css';
import Thanks from "./ButtonClick/thanks";

const EmailUs = props => {

    const [buttonShow, setButtonShow] = useState(false);

    return (
        <Fragment>
            <div className={classes.horizontalLigne}></div>
            <div className={classes.emailDiv}>
                <form style={{width:"93%"}}>
                    <div className={classes.space}>
                        <label className={classes.Labels}>Your full name</label>
                        <input className={classes.twiceInput} type='text' value='Sara Al Hamadi'></input></div>
                    <div className={classes.space}>
                        <label className={classes.Labels}>e-mail address</label>
                        <input className={classes.twiceInput} type='email' value='salhamadi7@gmail.com'></input></div>
                    <div className={classes.space}>
                        <label className={classes.LabelHelp}>How can we help</label>
                        <input className={classes.helpInput} type='text'></input>
                        <button className={classes.sendButton} type="submit"
                            onClick={() => setButtonShow(!buttonShow)}>
                            send</button>
                    </div>
                </form>
                {buttonShow && <Thanks />}
            </div>
        </Fragment>
    )
}

export default EmailUs;
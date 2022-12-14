import { Fragment, useState } from "react";
import classes from './list.module.css';
import CallUs from "./CallUs/callus";
import EmailUs from "./EmailUS/emailus";

const ContactUsList = props => {

    const [messageUsSHow, setMessageUsShow] = useState(false);
    const [callUsSHow, setCallUsShow] = useState(false);
    const [emailUsShow, setEmailUsShow] = useState(false);

    const ShowHideMessageUS = () => {
        setCallUsShow(null);
        setEmailUsShow(null);
        setMessageUsShow(!messageUsSHow);
    }

    const ShowHideCallUs = () => {
        setMessageUsShow(null);
        setEmailUsShow(null);
        setCallUsShow(!callUsSHow);
    }


    const ShowHideEmailUs = () => {
        setCallUsShow(null);
        setMessageUsShow(null);
        setEmailUsShow(!emailUsShow);
    }


    return (
        <Fragment>
            <div className={classes.horizontalLigne}
                style={{
                    opacity: messageUsSHow ? '' : '50%',
                }}></div>
            <div className={classes.messageus}
                onClick={ShowHideMessageUS}
                style={{
                    opacity: messageUsSHow ? '' : '50%',
                }}>
                <p className={classes.pContact}>message us</p>
                <img alt="" className={classes.imgcontact} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-message us baff29.png'}></img>
            </div>
            <div className={classes.rotateLigne}
                style={{
                    opacity: callUsSHow ? '' : '50%',
                }}></div>
            <div className={classes.callus}
                onClick={ShowHideCallUs}
                style={{
                    opacity: callUsSHow ? '' : '50%',
                }}>
                <p className={classes.pContact}>Call us</p>
                <img alt="" className={classes.imgcontact} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-email us baff29.png'}></img>
            </div>
            <div className={classes.verticalLigne}
                style={{
                    opacity: emailUsShow ? '' : '50%',
                }}></div>
            <div className={classes.emailus}
                onClick={ShowHideEmailUs}
                style={{
                    opacity: emailUsShow ? '' : '50%',
                }}>
                <p className={classes.pContact}>e-mail us</p>
                <img alt="" className={classes.imgcontact} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-call us baff29.png'}></img>
            </div>
            {callUsSHow && <CallUs />}
            {emailUsShow && <EmailUs/>}
        </Fragment>
    )
}

export default ContactUsList;
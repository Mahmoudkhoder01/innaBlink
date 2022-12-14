import { Fragment, useState } from "react";
import classes from './social.module.css';


const SocialMedia = props => {

    const [instaShow, setInstaShow] = useState(false);
    const [fcbShow, setFcbShow] = useState(true);
    
    const fcbHidden = ()=>{
        setInstaShow(true);
        setFcbShow(!fcbShow);
    }

    const instHidden =()=>{
        setFcbShow(true);
        setInstaShow(!instaShow);
    }

    return (
        <Fragment>
            <div className={classes.verticalLigne}
            style={{
                opacity: instaShow ? '50%' : '',
            }}></div>
            <a className={classes.insta}
            onClick={instHidden}
            style={{
                opacity: instaShow ? '50%' : '', 
            }}>
                <p className={classes.pSocial}>instagram</p>
                <img className={classes.imgSocial} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-instagram baff29.png'}></img>
            </a>
            <div className={classes.rotateLigne}
            style={{
                opacity: fcbShow ? '50%' : '',
            }}></div>
            <a className={classes.fcb}
            onClick={fcbHidden}
            style={{
                opacity: fcbShow ? '50%' : '',
            }}>
                <p className={classes.pSocial}>facebook</p>
                <img className={classes.imgSocial} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-facebook baff29.png'}></img>
            </a>
            
        </Fragment>
    )
}

export default SocialMedia;
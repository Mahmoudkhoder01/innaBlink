import { Fragment } from "react";
import classes from './where.module.css';
import Card from "../../../UI/Card";

const WhereCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.whereCard}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight:'bold'}}>All through your current location</span> (anywhere in your coverage area)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight:'bold'}}>Smart global freight forwarding solutions</span> (have your products available in 
                            your location from anywhere in the world, to anywhere in the world from your location)
                        </p>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default WhereCardContainer;
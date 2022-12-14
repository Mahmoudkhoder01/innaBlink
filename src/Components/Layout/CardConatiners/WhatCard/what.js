import { Fragment } from "react";
import classes from './what.module.css';
import Card from "../../../UI/Card";

const WhatCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.whatCard}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight: "bold"}}>Packages</span> (individuals)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight: "bold"}}>E-commerce</span> (businesses)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-03.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight: "bold"}}>Food & beverage</span> (restaurants)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-04.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight: "bold"}}>Special requests</span> (luxury items, at & special handling, delicate objects)
                        </p>
                        <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-05.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{fontWeight: "bold"}}>Warehousing & b2b distribution</span> (businesses)
                        </p>
                    </div>
                    </div>

                </div>
            </Card>
        </Fragment>
    )
}

export default WhatCardContainer;
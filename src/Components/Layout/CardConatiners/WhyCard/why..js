import { Fragment } from "react";
import classes from './why.module.css';
import Card from "../../../UI/Card";

const WhyCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.whyCard}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Each business is different and rquires different
                            customised operations</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Customer satisfaction is crucial for businesses</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-03.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Online shopping and delivery services are a real
                            necessity in the market</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-04.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Ops maximise businesses resources and profitability</span>
                        </p>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default WhyCardContainer;
import { Fragment } from "react";
import classes from './who.module.css';
import Card from "../../../UI/Card";

const WhoCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.whoCard}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Individuals</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Food & beverage</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-03.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>E-commerce</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-04.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Businesses to businesses</span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-05.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Businesses to customers</span>
                        </p>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default WhoCardContainer;
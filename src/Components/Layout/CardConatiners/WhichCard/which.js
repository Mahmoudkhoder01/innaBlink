import { Fragment } from "react";
import classes from './which.module.css';
import Card from "../../../UI/Card";

const WhichCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.whichCard}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                        <div className={classes.pCards}>
                            <span style={{ color: "blue" }}>Innablink</span> is a complete logistics integration solution,
                            porviding full strategic automation through our e-proprietary platform.?
                        </div>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                        <div className={classes.pCards}>
                            Our innovative logistics technology allows, customers, and businesses to seamlessly
                            integrate to serve their customer base with a cast-efficient unique model that
                            maximises the business's revenues.
                        </div>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-03.png'}></img>
                        <div className={classes.pCards}>
                            Choose a partner to boost your business's sales and profit: <span style={{ color: 'blue' }}>Choose Innablink.</span>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default WhichCardContainer;
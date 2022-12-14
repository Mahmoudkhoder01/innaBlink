import { Fragment } from "react";
import classes from './when.module.css';
import Card from "../../../UI/Card";
import { refType } from "@mui/utils";

const WhenCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.whenCard}>
                <div className={classes.container}>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Instant</span> (whithin 60 minutes in the same are / city)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>On-demand</span> (ideal for food & beverage)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-03.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Same-day</span> (booked through our dashboard, depending on the location of the delivery)
                        </p>
                    </div>
                    <div>
                        <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-04.png'}></img>
                        <p className={classes.pCards}>
                            <span style={{ fontWeight: 'bold' }}>Sheduled for later</span> (choose when and where to receive your products)
                        </p>
                    </div>
                </div>

            </Card>
        </Fragment>
    )
}

export default WhenCardContainer;
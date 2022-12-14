import { Fragment } from "react";
import classes from './How.module.css';
import Card from "../../../UI/Card";
import { Grid } from "@mui/material";

const HowCardContainer = props => {
    return (
        <Fragment>
            <div className={classes.verticalligne}></div>
            <Card className={classes.howCard}>
                <Grid container>
                    <Grid item lg={6}>
                        <div className={classes.container}>
                            <div className={classes.howdiv}>
                                <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-01.png'}></img>
                                <p className={classes.pCards}>
                                    <span style={{ fontWeight: 'bold' }}>DMS</span> (delivery management system)
                                </p>
                            </div>
                            <div>
                                <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-02.png'}></img>
                                <p className={classes.pCards}>
                                    <span style={{ fontWeight: 'bold' }}>API integration</span>
                                </p>
                            </div>
                            <div>
                                <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-03.png'}></img>
                                <p className={classes.pCards}>
                                    <span style={{ fontWeight: 'bold' }}>Logistics platform as a service</span>
                                </p>
                            </div>
                            <div>
                                <img className={classes.imgCounter} src={process.env.PUBLIC_URL + '/Assests/_innablink website icons-04.png'}></img>
                                <p className={classes.pCards}>
                                    <span style={{ fontWeight: 'bold' }}>Artficial intelligence - powered by tech</span>
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} className={classes.howgrid}>
                        <div className={classes.howimg}>
                            <img style={{width:'50px',height:'50px'}} src={process.env.PUBLIC_URL + '/Assests/bikes.png'}></img>
                            <span style={{color:'#0033ff'}}>bikes</span>
                        </div>
                        <div className={classes.howimg}>
                            <img style={{width:'50px',height:'50px'}} src={process.env.PUBLIC_URL + '/Assests/cars.png'}></img>
                            <span style={{color:'#0033ff'}}>cars</span>
                        </div>
                        <div className={classes.howimg}>
                            <img style={{width:'50px',height:'50px'}} src={process.env.PUBLIC_URL + '/Assests/vans.png'}></img>
                            <span style={{color:'#0033ff'}}>vans</span>
                        </div>
                        <div className={classes.howimg}>
                            <img style={{width:'50px',height:'50px'}} src={process.env.PUBLIC_URL + '/Assests/trucks.png'}></img>
                            <span style={{color:'#0033ff'}}>trucks</span>
                        </div>
                        <div className={classes.howimg}>
                            <img style={{width:'50px',height:'50px'}} src={process.env.PUBLIC_URL + '/Assests/airfreight.png'}></img>
                            <span style={{color:'#0033ff'}}>airfreight</span>
                        </div>
                        <div className={classes.howimg}>
                            <img style={{width:'50px',height:'50px'}} src={process.env.PUBLIC_URL + '/Assests/seafreight.png'}></img>
                            <span style={{color:'#0033ff'}}>seafreight</span>
                        </div>
                </Grid>
            </Grid>
        </Card>
        </Fragment >
    )
}

export default HowCardContainer;
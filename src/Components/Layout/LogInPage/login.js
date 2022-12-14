import { Fragment } from "react";
import classes from './login.module.css';

const LogIN = (props) => {
    return (
        <Fragment>
            <div className={classes.bigDIv}>
                <div className={classes.first}>
                    <a href="/"><img className={classes.Logo}
                        src={process.env.PUBLIC_URL + '/Assests/_innablinkwebsitelogotype.png'}></img></a>
                    <div className={classes.Ligne}></div>
                    <div className={classes.userLogin}>
                        <h3 style={{ color: '#0033ff' }}>user login</h3>
                        <p className={classes.plogin}>please enter your login credentials to continue with us</p>
                        <form>
                            <p>
                                <label>email</label>
                                <input style={{ marginLeft: '2rem' }} className={classes.inputs} type='email' placeholder="email@domain.com" />
                            </p>
                            <p>
                                <label>password</label>
                                <input className={classes.inputs} type='password' placeholder="***********" />
                            </p>
                            <p>
                                <input className={classes.checkLog} type='checkbox' />
                                <label>remember me</label>
                            </p>
                            <button className={classes.buttonLogin}>Login</button>
                            <p className={classes.pLogin}>forgot your password?</p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LogIN;
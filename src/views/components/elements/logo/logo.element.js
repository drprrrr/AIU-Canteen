import {NavLink} from "react-router-dom";

// assets
import { samsa } from '../../../../assets/logos'

// styles
import classes from './style.module.scss';

export const LogoElement = (props) => {
    return (
        <div className={classes.logo}>
            <NavLink className={classes.h3_nav_link} to={'/'}>
                <div className={classes.logo_image}>
                    <img src={samsa} alt={"Samsa logo"} />
                </div>
            </NavLink>
        </div>
    )
}

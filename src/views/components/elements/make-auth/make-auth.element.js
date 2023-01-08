import classes from './style.module.scss';
import {NavLink} from "react-router-dom";
import {BrowserRoute} from "../../../routes/browser.routes";

export const MakeAuth = (props) => {
    return (
        <div className={classes.make_auth}>
            <div>
                <NavLink className={classes.nav_link} to={BrowserRoute.adminPage}>
                    Админ
                </NavLink>
            </div>
        </div>
    )
}

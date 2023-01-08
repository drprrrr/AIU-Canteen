import classes from './style.module.scss';
import {NavLink} from "react-router-dom";
import {BrowserRoute} from "../../../routes/browser.routes";

export const NavigationHeader = (props) => {
    const handleClick = () => {
        props.setState(false);
    }
    
    return (
        <div className={classes.navigation}>
            <ul className={`${classes.unordered_list} ${props.value ? classes.list_vertical : ''}`}>
                <li style={{marginRight: '10px'}} className={classes.list_item} onClick={handleClick}>
                    <NavLink className={classes.nav_link} to={BrowserRoute.catalogPage}>
                        Кантин
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

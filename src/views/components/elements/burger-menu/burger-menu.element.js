

// styles
import classes from './style.module.scss';

export const BurgerMenu = (props) => {
    
    const handleClick = (e) => {
        props.setState(!props.value);
    }
    
    return (
        <div>
            <div onClick={handleClick}>
                Burger
            </div>
        </div>
    )
}

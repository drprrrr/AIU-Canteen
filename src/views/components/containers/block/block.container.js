import classes from './style.module.scss';

export const BlockContainer = (props) => {
    return (
        <div style={props.style} className={classes.container}>
            {props.children}
        </div>
    )
}

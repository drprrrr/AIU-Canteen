import classes from './style.module.scss';

export const ContentContainer = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

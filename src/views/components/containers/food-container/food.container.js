import React from 'react';
import classes from './style.module.scss';

export const FoodContainer = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
};

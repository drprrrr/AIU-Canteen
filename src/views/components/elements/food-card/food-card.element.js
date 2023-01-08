import React from 'react';
import classes from './style.module.scss';

export const FoodCard = ({ id=0, title = '', description = '', price = 0, image = ''}) => {
    return (
        <div className={classes.food_card}>
            <div className={classes.image_container}>
                <img src={image} alt='product' />
            </div>
            <div className={classes.info_container}>
                <h3>{title}</h3>
                <p className={classes.price}>Цена: {price}</p>
                <p className={classes.description}>Описание: {description}</p>
            </div>
        </div>
    );
};

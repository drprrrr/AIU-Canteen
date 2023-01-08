import React, {useEffect, useState} from 'react';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {db} from "../../../config/firebase-config";
import {FoodContainer} from "../../components/containers/food-container";
import {FoodCard} from "../../components/elements/food-card";
import classes from './style.module.scss';

export const CatalogPage = () => {
    const foodsCollectionRef = collection(db, 'foods');
    const ordersCollectionRef = collection(db, 'orders');
    const [foods, setFoods] = useState([]);
    
    // Toast state
    const [show, setShow] = useState(false);
    
    const getFoods = async () => {
        const data = await getDocs(foodsCollectionRef);
        setFoods(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    
    const makeOrder = async (food) => {
        console.log(food);
        await addDoc(ordersCollectionRef, food);
        setShow(true)
    }
    
    useEffect(() => {
        getFoods();
    }, [foodsCollectionRef])
    
    return (
        <div className={classes.canteen}>
            <h1>Закажи покушать!</h1>
            <FoodContainer>
                {
                    foods.map((food) => (
                        <div key={food.id}>
                            <FoodCard id={food.id} title={food.title} description={food.description}
                                      image={food.image} price={food.price}/>
                            <button onClick={() => makeOrder(food)}>Заказать</button>
                        </div>
                    ))
                }
            </FoodContainer>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>Заказ оформлен!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

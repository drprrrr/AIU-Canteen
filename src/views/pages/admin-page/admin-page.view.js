import React, {useEffect, useState} from 'react';
import {addDoc, collection, doc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {db} from "../../../config/firebase-config";
import {FoodCard} from "../../components/elements/food-card";
import {FoodContainer} from "../../components/containers/food-container";
import classes from './style.module.scss';

export const AdminPage = () => {
    const foodsCollectionRef = collection(db, 'foods');
    const ordersCollectionRef = collection(db, 'orders');
    
    const [orders, setOrders] = useState([]);
    const [foods, setFoods] = useState([]);
    
    // Handle completed order
    const handleCompleted = async (id) => {
        const orderDoc = doc(db, 'orders', id);
        await deleteDoc(orderDoc);
        setOrders(orders.filter((order) => order.id !== id));
    }
    
    // Changing the food
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [id, setId] = useState('');
    
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setTitle('');
        setDescription('');
        setPrice(0);
        setImage('');
    };
    const handleOpen = (food) => {
        setShow(true)
        setTitle(food.title);
        setDescription(food.description);
        setPrice(food.price);
        setImage(food.image);
        setId(food.id);
    };
    const saveChanges = async () => {
        const foodDoc = doc(db, 'foods', id);
        const newFields = {
            title,
            description,
            price,
            image
        }
        await updateDoc(foodDoc, newFields);
        handleClose();
    }
    
    // Create a food
    const [create, setCreate] = useState(false);
    const handleCreateOpen = () => {
        setCreate(true);
    }
    const handleCreateClose = () => {
        setCreate(false);
        setTitle('');
        setDescription('');
        setPrice(0);
        setImage('');
    }
    const saveCreateChanges = async () => {
        if (title === '' || description === '' || image === '' || price === 0) {
            alert('?????????????? ?????? ????????!')
        }
        await addDoc(foodsCollectionRef, { title, description, price, image });
        handleCreateClose();
    }
    
    const getFoods = async () => {
        const data = await getDocs(foodsCollectionRef);
        setFoods(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    
    const getOrders = async () => {
        const data = await getDocs(ordersCollectionRef);
        setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    
    useEffect(() => {
        getFoods();
    }, [])
    
    useEffect(() => {
        getOrders();
    }, [])
    
    return (
        <div>
            <div>
                <div className={classes.orders}>
                    <h2>????????????</h2>
                    <FoodContainer>
                        {
                            orders.map((food) => (
                                <div className={classes.order_container} key={food.id}>
                                    <FoodCard
                                        id={food.id}
                                        title={food.title}
                                        description={food.description}
                                        image={food.image} price={food.price}
                                    />
                                    <button onClick={() => handleCompleted(food.id)}>??????????????????</button>
                                </div>
                            ))
                        }
                    </FoodContainer>
                </div>
                <div className={classes.all_foods}>
                    <div className={classes.create_title}>
                        <h2>?????? ????????????????</h2>
                        <button onClick={handleCreateOpen}>???????????????? +</button>
                    </div>
                    <FoodContainer>
                        {
                            foods.map((food) => (
                                <div key={food.id}>
                                    <FoodCard id={food.id} title={food.title} description={food.description}
                                              image={food.image} price={food.price}/>
                                    <button onClick={() => handleOpen(food)}>????????????????</button>
                                </div>
                            ))
                        }
                    </FoodContainer>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>??????????????????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={classes.modal_inputs}>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                        <input value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type={'number'} /> <br />
                        <input value={image} onChange={(e) => setImage(e.target.value)} /> <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ????????????
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        ??????????????????
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={create} onHide={handleCreateClose}>
                <Modal.Header closeButton>
                    <Modal.Title>????????????????????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={classes.modal_inputs}>
                        <input placeholder={'????????????????...'} value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                        <input placeholder={'????????????????...'} value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type={'number'} /> <br />
                        <input placeholder={'???????????? ???? ????????????????'} value={image} onChange={(e) => setImage(e.target.value)} /> <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCreateClose}>
                        ????????????
                    </Button>
                    <Button variant="primary" onClick={saveCreateChanges}>
                        ??????????????????
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

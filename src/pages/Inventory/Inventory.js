import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css';
import 'animate.css';

const Inventory = () => {
    const { fruitId } = useParams();
    const [fruit, setFruit] = useState({});

    useEffect(() => {
        const url = `https://frozen-sierra-44073.herokuapp.com/fruit/${fruitId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, []);


    const handleUpdateQuantity = q => {
        const newQuantity = fruit.quantity - 1;
        const newFruit = { ...fruit, quantity: newQuantity }
        setFruit(newFruit);

        const url = `https://frozen-sierra-44073.herokuapp.com/fruit/${fruitId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFruit)
        })
            .then(res => res.json())
            .then(data => { })
    }

    const handleRestock = e => {
        e.preventDefault();
        const inputValue = parseInt(e.target.number.value);
        const newQuantity = parseInt(fruit.quantity) + inputValue;
        const newFruit = { ...fruit, quantity: newQuantity }
        setFruit(newFruit);

        const url = `https://frozen-sierra-44073.herokuapp.com/fruit/${fruitId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFruit)
        })
            .then(res => res.json())
            .then(data => { })
            e.target.reset();
    }


    return (
        <div className='inventory-container '>
            <div className='fruit-container animate__animated animate__zoomIn'>
                <img className='image' src={fruit.img} alt="" />
                <h3 className='text-success'>{fruit.name}</h3>
                <p className='fs-6'>ID: {fruit._id}</p>
                <h5>PRICE: {fruit.price}</h5>
                <p className='fw-bold fs-5 text-danger'>QUANTITY: {fruit.quantity}</p>
                <p>SUPPLIER: {fruit.supplier}</p>
                <p>{fruit.description}</p>
                <button onClick={() => handleUpdateQuantity(fruit.quantity)} className='delivered'> Delivered </button>

            </div>
            <div className='form-container'>
                <p className='fw-bold fs-3 text-primary'>Restock the item</p>
                <form onSubmit={handleRestock} >
                    <input id='restock-input'  type="number" name='number' placeholder='Enter quantity' />
                    <input className=' btn btn-success ms-2' type="submit" value="Restock" />
                </form>
            </div>
            <div className='text-center manage-inventory'>
            <Link to="/manage-inventory">
                <button className='btn btn-danger button animate__animated animate__fadeInBottomLeft'>Manage Inventory</button>
            </Link>
            </div>
        </div>
    );
};

export default Inventory;
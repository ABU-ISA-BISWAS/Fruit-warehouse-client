import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const { fruitId } = useParams();
    const [fruit, setFruit] = useState({});
  
    useEffect(() => {
        const url = `http://localhost:5000/fruit/${fruitId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, []);


    const handleUpdateData = e => {
        e.preventDefault();
        const inputPrice = e.target.price.value;
        const newPrice = parseInt(inputPrice);
        console.log(typeof (inputPrice));
        const newFruit = { ...fruit, price: newPrice }
        setFruit(newFruit);

        const url = `http://localhost:5000/fruit/${fruitId}`;
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
        <div>
            <div className='update-price-container inventory-container'>

                <div className='fruit-container'>
                    <img className='product-image' src={fruit.img} alt="" />
                    <h3 className='text-success'>{fruit.name}</h3>
                    <h5>PRICE: {fruit.price}</h5>
                </div>

                <div className='form-container'>
                    <p className='fw-bold fs-3 '>Udate the price of {fruit.name}</p>
                    <form onSubmit={handleUpdateData} >
                        <input type="number" name='price' placeholder='Enter New Price' />
                        <input className=' btn btn-success ms-2' type="submit" value="Update" />
                    </form>
                    <Link to="/manage-inventory">
                        <button className='btn btn-danger button mt-5'>Go Back Io Manage Inventory</button>
                    </Link>
                </div>

                
            </div>

        </div>
    );
};

export default UpdateProduct;
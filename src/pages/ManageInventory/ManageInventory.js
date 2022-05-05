import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageInventory.css';

const ManageInventory = () => {
    const [fruits, setFruits] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/fruit/${id}`;
            fetch(url, {
                method: 'DELETE',

            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = fruits.filter(fruit => fruit._id !== id);
                        setFruits(remaining);
                    }

                })
        }
    }

    return (
        <div className='inventory-management'>
            <p className='text-dark fw-bold fs-4 m-4'>MANAGE YOUR INVENTORY</p>
            <div  className='data-table mx-auto'>
            <Table  striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits.map(fruit => <tr>
                            <td>{fruit.name}</td>
                            <td>{fruit.price}</td>
                            <td>{fruit.quantity}</td>
                            <td>
                                <div key={fruit._id} >
                                    <button className='btn btn-danger me-2' onClick={() => handleDelete(fruit._id)}>Delete</button>
                                    <button className='btn btn-success'>Update</button>
                                </div>
                            </td>

                        </tr>)
                    }
                </tbody>
            </Table>
            </div>
            
        </div>
    );
};

export default ManageInventory;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './ManageInventory.css';

const ManageInventory = () => {
    const [fruits, setFruits] = useState([]);
    // const [fruit, setFruit] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/fruit')
    //         .then(res => res.json())
    //         .then(data => setFruits(data))
    // }, []);

    const navigate=useNavigate();
    const navigateToServiceDetail=id=>{
        navigate(`/update-data/${id}`)
    }
    const navigateToAddItem=()=>{
        navigate('/add-new-item')
    }


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

    

//    console.log(fruit._id)

    return (
        <div className='inventory-management'>
            <p className='text-dark fw-bold fs-4 m-4'>MANAGE YOUR INVENTORY</p>
            <button className='btn btn-success ' onClick={()=>navigateToAddItem()}>Add New Item</button>

            <div className='data-table mx-auto'>
                <Table striped bordered hover variant="dark">
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

                                        
                                            <button onClick={()=>navigateToServiceDetail(fruit._id)} className='btn btn-success'>Update Price</button>
                                            
                                        
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
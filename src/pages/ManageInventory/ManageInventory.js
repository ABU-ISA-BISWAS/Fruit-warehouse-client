import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css';

const ManageInventory = () => {
    const [fruits, setFruits] = useState([]);

    const navigate=useNavigate();
    const navigateToUpdate=id=>{
        navigate(`/update-data/${id}`)
    }
    const navigateToAddItem=()=>{
        navigate('/add-new-item')
    }

    useEffect(() => {
        fetch('https://frozen-sierra-44073.herokuapp.com/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://frozen-sierra-44073.herokuapp.com/fruit/${id}`;
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
            <button className='btn btn-success ' onClick={()=>navigateToAddItem()}>Add New Item</button>

            <div className='data-table mx-auto'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            
                            <th>Delete or Update</th>
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
                                        <button id='delete-btn' className='btn btn-danger me-2' onClick={() => handleDelete(fruit._id)}>Delete</button>

                                        
                                            <button onClick={()=>navigateToUpdate(fruit._id)} className='btn btn-success'>Update</button>
                                            
                                        
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
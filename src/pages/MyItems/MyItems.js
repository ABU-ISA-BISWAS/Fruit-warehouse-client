import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://frozen-sierra-44073.herokuapp.com/fruits?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }

            }

        }
        getItems();
    }, [])

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

                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }

                })
        }
    }
    return (
        <div className='myItem'>
            <div>
                <p className='fw-bold fs-3 text-success mt-4'>MY ITEMS : {items.length}</p>
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
                                items.map(item => <tr>
                                    <td><img className='itemImage ' src={item.img} alt="" />{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                   

                                    <td>
                                        <div key={item._id} >
                                            <button className='btn btn-danger me-2' onClick={() => handleDelete(item._id)}>Delete</button>





                                        </div>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyItems;
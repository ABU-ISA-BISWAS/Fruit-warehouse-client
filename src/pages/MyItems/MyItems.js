import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate =useNavigate();

    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/fruits?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                if(error.response.status === 401 || error.response.status === 403){
                   signOut(auth);
                    navigate('/login') 
                }

            }

        }
        getItems();
    }, [])
    return (
        <div>
            <h2>items:{items.length}</h2>
        </div>
    );
};

export default MyItems;
import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);
    
    return (
        <div className='fruits'>
            <h2 className='fruits-title mb-5 mt-5 fs-1 fw-bold'>Trending Fruits</h2>

            <div className=' fruits-container'>

                {
                    fruits.slice(6).map(fruit => <Fruit
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>
        </div>
    );
};

export default Fruits;
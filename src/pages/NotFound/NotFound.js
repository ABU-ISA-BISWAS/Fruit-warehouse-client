import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <p className='fw-bolder fs-1 text-danger'>404</p>
            <p className='fw-bold fs-3 '>Page Not Found</p>
        </div>
    );
};

export default NotFound;
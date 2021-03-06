import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruit.css';


const Fruit = ({fruit}) => {
    const {_id,name,img,description,price,quantity,supplier}=fruit;
    const navigate=useNavigate();
    const navigateToManageStock=id=>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='fruit animate__animated animate__zoomIn'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p className='fs-6 fw-bold'>Price:${price}</p>
            <p className='fs-6 fw-bold'>Quantity:{quantity}</p>
            <p className='text-primary' >Supplier Name: {supplier}</p>
            <p className='mb-5 '><small>{description}</small></p>
            <button onClick={()=>navigateToManageStock(_id)} className=' btn btn-success position'>Manage Stock</button>
            
        </div>
    );
};

export default Fruit;
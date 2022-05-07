import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './AddNewItem.css';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      
      const url =`https://frozen-sierra-44073.herokuapp.com/fruit`;
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res=>res.json())
      
      .then(result=>{})
      reset();
    };
    return (
       <div className='addItemContainer'>
            <div className=' mx-auto addItemForm'>
            <p className='fw-bold fs-4 text-success mt-5'>ADD A ITEM</p>
            <form className='d-flex flex-column animate__animated animate__zoomIn' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3' placeholder='Product Name' {...register("name", { required: true, maxLength: 10 })} />
      <input className='mb-3' placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 15 })} />
      <textarea className='mb-3' placeholder='Description' {...register("description")} />
      <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
      <input className='mb-3' placeholder='Email'  value={user.email} type="email" {...register("email")} />
      <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mx-auto w-50' id='submit' type="submit" value="Add Item" />
    </form>
        </div>
       </div>
    );
};

export default AddNewItem;
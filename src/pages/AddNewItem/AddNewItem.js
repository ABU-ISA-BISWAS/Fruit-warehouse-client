import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewItem.css';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data);
      const url =`http://localhost:5000/fruit`;
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result);
      })
    };
    return (
       <div className='addItemContainer'>
            <div className='w-25 mx-auto addItemForm'>
            <p className='fw-bold fs-4 text-success mt-5'>ADD A ITEM</p>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 10 })} />
      <input className='mb-3' placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 15 })} />
      <textarea className='mb-3' placeholder='Description' {...register("description")} />
      <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
      <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mx-auto w-50' id='submit' type="submit" value="Add Item" />
    </form>
        </div>
       </div>
    );
};

export default AddNewItem;
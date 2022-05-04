import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageInventory = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    return (
        <div>
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
        <td><button className='btn btn-success'>Update</button> <button className='btn btn-danger'>Delete</button></td>
      </tr>)
 }
    
    
  </tbody>
</Table>
        </div>
    );
};

export default ManageInventory;
import React from 'react';
import Fruits from '../../Fruits/Fruits';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Off from '../Off/Off';
import './Home.css';


const Home = () => {
    return (
        <div className='home'>
            
            <Banner></Banner>
            <Fruits></Fruits>
            <Off></Off>
            <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;
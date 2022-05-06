import React from 'react';
import Fruits from '../../Fruits/Fruits';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Off from '../Off/Off';


const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <Fruits></Fruits>
            <Off></Off>
            <CustomerReview></CustomerReview>
            
        </>
    );
};

export default Home;
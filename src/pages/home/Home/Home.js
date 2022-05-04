import React from 'react';
import Fruits from '../../Fruits/Fruits';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Off from '../Off/Off';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Fruits></Fruits>
            <Off></Off>
            <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;
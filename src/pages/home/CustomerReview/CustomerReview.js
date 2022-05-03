import React from 'react';
import './CustomerReview.css';

const CustomerReview = () => {
    return (
        <div className='mx-auto'>
            <p className='fw-bold fs-2'>What Our Customers Saying</p>
            <div className='style mx-auto'>
                <p></p>
                <p></p>
            </div>
            <div className='d-flex review-container mx-auto'>
                <div className='review'>
                    <p>Good quality at a reasonable price. Excellent packing materials kept it fresh even though I ordered in the hottest part of the summer and unblemished on its way via UPS. I have ordered from this company several times and will continue to do so.</p>
                    <h4>Sandy Cane</h4>
                </div>
                <div className='review'>
                    <p>Good quality at a reasonable price. Excellent packing materials kept it fresh even though I ordered in the hottest part of the summer and unblemished on its way via UPS. I have ordered from this company several times and will continue to do so.</p>
                    <h4>Rob Wilson</h4>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
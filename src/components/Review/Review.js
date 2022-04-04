import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, comment, ratting } = review;
    return (
        <div className=''>
            <div className='p-5 m-5 border-2 border-red-600 rounded bg-red-100'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p className='my-3'>{comment}</p>
                <p>Ratting: <span className='text-red-600 font-bold'>{ratting}</span></p>
            </div>
        </div>
    );
};

export default Review;
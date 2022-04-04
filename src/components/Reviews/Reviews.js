import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='review-container'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;
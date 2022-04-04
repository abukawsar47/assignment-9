import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mrf from '../../assets/Image/mrf.png'
import useReviews from '../../hooks/useReviews'
import './Home.css'


const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate()

    return (
        <div>
            <div className='banner flex items-center justify-between'>
                <div className="banner-left">
                    <h2 className='text-3xl md:text-6xl font-bold'>ABU SPORTS</h2>
                    <h2 className='text-3xl md:text-6xl font-bold text-red-600 my-6'>MRF Bat Is Your Best <br /> Cricket Bat</h2>
                    <p>We are a leading Wholesale Trader of MRF Genius Cricket Bat, ENGLISH WILLOW CRICKET BAT, SS ENGLISH WILLOW CRICKET BAT, SS Ton Cricket Bat and SG Cricket Bat from Dhaka, Bangladesh. </p>
                    <button className='mt-6 px-6 py-3 bg-red-600 border rounded font-bold text-xl hover:text-white duration-300'>Live Demo</button>
                </div>
                <div className="banner-right">
                    <img src={Mrf} alt="" />
                </div>
            </div>
            <div className='my-6'>
                <h2 className='text-center text-2xl md:text-5xl font-bold mb-6'>Customer Reviews (3)</h2>
                <div className='review-container'>
                    {
                        reviews.slice(0, 3).map(review => (
                            <div key={review._id} className='p-5 m-5 border-2 border-red-600 rounded bg-red-100'>
                                <h1 className='text-xl font-bold'>{review.name}</h1>
                                <p className='my-3'>{review.comment}</p>
                                <p>Ratting: <span className='text-red-600 font-bold'>{review.ratting}</span></p>
                            </div>
                        ))
                    }
                </div>
                <button onClick={() => navigate("/reviews")} className='mt-6 px-6 py-3 bg-red-600 border rounded font-bold text-xl hover:text-white duration-300 text-center block mx-auto'>View All Reviews</button>
            </div>
        </div>

    );
};

export default Home;
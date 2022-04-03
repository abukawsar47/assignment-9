import React from 'react';
// import Mrf from '../../assets/Image/mrf.png'
import Mrf from '../../assets/Image/mrf.png'
import './Header.css'


const Header = () => {
    return (
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
    );
};

export default Header;
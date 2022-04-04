import React from 'react';
import notfound from '../../assets/Image/404.gif'

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
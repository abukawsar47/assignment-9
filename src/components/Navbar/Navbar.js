import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='menu bg-red-600'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/review">Review </CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Navbar;
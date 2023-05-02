/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowCircleRight, FaBeer, FaCopyright } from 'react-icons/fa'
import { MdFoodBank } from 'react-icons/md'


const Footer = () => {
    return (
        <>
        <div className='mx-3 row mt-2 mb-2'>
            <div className=' col-12 col-lg-5 text-start'>
            <div className='d-flex'><MdFoodBank className='text-danger mt-2'></MdFoodBank><p className='text-black dis fs-4 '>ita_Cuisine</p></div>
            <p>Welcome to out cuisine. <br /> Best Food for our all customer. <br /> pick your favorite.</p>
            </div>
            {/* categories */}
            <div className='col-6 col-lg-2'>
                <h4 className='mb-3'>Categories</h4>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Breakfast Recipes</p></div>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Dinner Recipes</p></div>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Lunch Recipes</p></div>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Dine & Dash</p></div>
            </div>
            {/* learn more */}
            <div className='col-6 col-lg-2'>
                <h4>Learn More</h4>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Breakfast Recipes</p></div>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Lunch Recipes</p></div>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Dinner Recipes</p></div>
                <div className='d-flex mb-1'><FaArrowCircleRight className='text-danger mt-1'/> <p>Dine & Dash</p></div>
            </div>
            {/* social media links */}
            <div className='col-12 col-lg-3'>
                <h4>Get in <br />Connect </h4>
                {/* 4 icons */}
                <div className='d-flex'>

                </div>
                <button style={{backgroundColor:"#D54215"}} className='text-white rounded border px-2 subtle'>Contact Us</button>
            </div>
        </div>
        <div className="d-flex flex-row-reverse justify-content-between align-items-center text-white px-3" style={{backgroundColor:'#D54215', height: '50px', overflow: 'hidden'}}>
            <div>
                <p className='text-secondary'><small>Copyright <FaCopyright></FaCopyright> 2023 ita_cuisine, All rights reserved.</small></p>
            </div>
            <div className='d-flex'>
                <p className='me-3'><small>Term of use</small></p>
                <p className='me-3'><small>Privacy policy</small></p>
                <p className='me-3'><small>Cookie Policy</small></p>
                <p className='me-3'><small>Sitemap</small></p>
            </div>
        </div>
        </>
        
    );
};

export default Footer;
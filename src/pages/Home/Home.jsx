import React from 'react';
import Banner from '../Banner/Banner';
import Chef from './Chef';
import { useLoaderData } from 'react-router-dom';
import FavDishes from './FavoriteDishesSection/FavDishes';
import Faq from './FaQ/Faq';
import BannerRedone from '../Banner/BannerRedone';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            {/* <Banner></Banner> */}
            <BannerRedone/>
            <Chef></Chef>
            <FavDishes></FavDishes>
            <Faq></Faq>
        </div>
    );
};

export default Home;
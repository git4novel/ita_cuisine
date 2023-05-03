import React from 'react';
import Banner from '../Banner/Banner';
import Chef from './Chef';
import { useLoaderData } from 'react-router-dom';
import FavDishes from '../FavoriteDishesSection/FavDishes';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <FavDishes></FavDishes>
        </div>
    );
};

export default Home;
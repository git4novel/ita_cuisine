import React from 'react';
import Banner from '../Banner/Banner';
import Chef from './Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
        </div>
    );
};

export default Home;
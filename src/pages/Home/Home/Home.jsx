import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import ExtraSecOne from '../ExtraSecOne/ExtraSecOne';
import Popular from '../Popular/Popular/Popular';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dance 'til Dawn | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='m-10'>
            <Popular></Popular>
            </div>
            <ExtraSecOne></ExtraSecOne>
        </div>
    );
};

export default Home;
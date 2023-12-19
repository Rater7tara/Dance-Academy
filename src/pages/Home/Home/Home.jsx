import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import ExtraSecOne from '../ExtraSecOne/ExtraSecOne';
import Instructors from '../PopInstractors/Instructors/Instructors';
import Popular from '../Popular/Popular/Popular';
import OurGallery from './OurGallery/OurGallery';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dance 'til Dawn | Home</title>
            </Helmet>
            <Banner></Banner>
            <OurGallery></OurGallery>
            <div className='m-10'>
            <Popular></Popular>
            </div>
            <ExtraSecOne></ExtraSecOne>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;
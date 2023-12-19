import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import {Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';

const LoginLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;
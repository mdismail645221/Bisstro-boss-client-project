import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared Section/Header/Header';
import Footer from '../Shared Section/Footer/Footer';

const Main = () => {
    return (
        <main>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Main;
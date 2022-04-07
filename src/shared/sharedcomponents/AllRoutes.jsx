import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateOutlet from '../../components/PrivateRoute';
import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';
import Footer from './Footer';
import Navbar from './Navbar';

function AllRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/*" element={<PrivateOutlet />}>
                    <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default AllRoutes;

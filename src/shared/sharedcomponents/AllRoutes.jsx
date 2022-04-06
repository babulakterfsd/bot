import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Footer from './Footer';
import Navbar from './Navbar';

function AllRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<PrivateRoute />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AllRoutes;

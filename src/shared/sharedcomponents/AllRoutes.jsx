import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';
import Footer from './Footer';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function AllRoutes() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default AllRoutes;

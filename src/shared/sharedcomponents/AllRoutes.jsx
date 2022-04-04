import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Register from '../../pages/Register';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;

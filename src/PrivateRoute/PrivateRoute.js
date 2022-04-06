/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

function PrivateRoute({ children }) {
    const { user, isLoading } = UseAuth();
    const location = useLocation();
    if (isLoading) {
        return <div className="text-center my-5">..........Loading..........</div>;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;

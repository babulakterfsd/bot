/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

function PrivateRoute({ children }) {
    const { user } = UseAuth();
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" />;
}

export default PrivateRoute;

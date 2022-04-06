/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

function PrivateRoute() {
    const auth = useAuth();
    const history = useNavigate();

    return auth ? <Outlet /> : history('/login');
}

export default PrivateRoute;

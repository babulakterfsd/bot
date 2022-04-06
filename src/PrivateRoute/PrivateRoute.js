/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center my-5">Loading.........</div>;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;

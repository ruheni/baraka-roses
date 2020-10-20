import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ comp: Component, ...rest }: any) => {
    let location = useLocation();
    const { isAuthenticated } = useAuth0()

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;

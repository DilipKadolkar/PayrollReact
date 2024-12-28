// PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../Routes/AuthContext"; // Ensure AuthContext is imported correctly

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : < Navigate to = "/login" / > ;
};

export default PrivateRoute;
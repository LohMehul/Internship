import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, ...props }) => {
  const isAuthenticated = true; // Replace with your authentication logic (e.g., useContext, useState)

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
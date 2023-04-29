import React from "react";
import useAuth from "../firebase/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { currentUser, isAuthLoading } = useAuth();
  if (isAuthLoading) {
    return <h1>Loading...</h1>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

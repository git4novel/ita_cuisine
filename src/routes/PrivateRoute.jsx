/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();

  // spinner will come on loading state becoming the true;
  if (loading) {
    return <Spinner animation="border" />;
  } else if (currentUser) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;

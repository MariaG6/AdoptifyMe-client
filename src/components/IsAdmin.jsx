import React from "react";
import { useAuthContext } from "../context/Auth.Context";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { user } = useAuthContext();

  return user?.isAdmin ? children : <Navigate to={"/"} />;
}

export default IsAdmin;
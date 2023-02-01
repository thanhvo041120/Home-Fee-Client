import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";
const ProtectRoute = ({ role }) => {
  const authentication = useAppSelector((state) => state.auth);
  if (authentication.isLogin && role === authentication.role) {
    return <Outlet />;
  }
  if (authentication.isLogin && role !== authentication.role) {
    if (authentication.role === 2) {
      return <Navigate to="/staff" />;
    }
    if (authentication.role === 3) {
      return <Navigate to="/user" />;
    }
    if (authentication.role === 1) {
      return <Navigate to="/admin" />;
    }
  }

  return <Navigate to="/auth" />;
};

export default ProtectRoute;

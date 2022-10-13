import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.user.isAuth);
  return auth ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default PrivateRoutes;

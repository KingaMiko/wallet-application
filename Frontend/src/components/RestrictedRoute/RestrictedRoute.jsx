import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

export const RestrictedRoute = ({ navigateTo, children }) => {
  const { isAuth, isRefreshing } = useAuth();

  if (isAuth && !isRefreshing) {
    return <Navigate to={navigateTo} />;
  }

  return children;
};

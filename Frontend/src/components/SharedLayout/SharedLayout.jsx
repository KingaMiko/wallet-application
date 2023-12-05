import React from 'react';
import Header from 'components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const SharedLayout = () => {
  const location = useLocation();

  const showHeader = !['/login', '/register'].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
    </>
  );
};

export default SharedLayout;

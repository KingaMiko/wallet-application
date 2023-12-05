import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
};

export default SharedLayout;

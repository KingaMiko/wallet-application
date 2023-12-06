import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from 'components/Header/Header';

const SharedLayout = () => {
  const location = useLocation();

  const showHeader = !['/login', '/register'].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Outlet />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;

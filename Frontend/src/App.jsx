import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const RegisterPage = lazy(() => import('pages/AuthPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/AuthPages/LoginPage'));
const HomePage = lazy(() => import('pages/Home/Home.jsx'));
const StatisticsPage = lazy(() => import('pages/Statistics/Statistics.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route
          path="home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="statistics"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <StatisticsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

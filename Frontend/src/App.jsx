import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPatterns } from 'redux/global/operations';
import { refreshUser } from 'redux/session/operations';

import { useAuth } from './hooks/useAuth';

import Loader from 'components/Loader/Loader';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';

const RegisterPage = lazy(() => import('pages/AuthPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/AuthPages/LoginPage'));
const HomePage = lazy(() => import('pages/Home/Home.jsx'));
const StatisticsPage = lazy(() => import('pages/Statistics/Statistics.jsx'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getPatterns());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route
            path="home"
            element={
              <PrivateRoute navigateTo="/login">
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <PrivateRoute navigateTo="/login">
                <StatisticsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute navigateTo="/home">
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute navigateTo="/home">
                <RegisterPage />
              </RestrictedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

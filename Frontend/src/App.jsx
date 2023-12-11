import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Loader,
  SharedLayout,
  PrivateRoute,
  RestrictedRoute,
} from 'components/';
import { selectIsLoading } from 'redux/global/selectors';
import { getPatterns } from 'redux/global/operations';
import { refreshUser } from 'redux/session/operations';
import { getAllUserCategories } from 'redux/finance/operations';
import { useAuth } from './hooks/useAuth';

const RegisterPage = lazy(() => import('pages/AuthPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/AuthPages/LoginPage'));
const HomePage = lazy(() => import('pages/Home/Home.jsx'));
const StatisticsPage = lazy(() => import('pages/Statistics/Statistics.jsx'));
const RedirectPage = lazy(() => import('pages/RedirectPage/RedirectPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getPatterns());
    dispatch(getAllUserCategories());
  }, [dispatch]);

  return isRefreshing || isLoading ? (
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

          <Route
            path="verify/:verificationToken"
            element={
              <RestrictedRoute navigateTo="/home">
                <RedirectPage />
              </RestrictedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

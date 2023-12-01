import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const RegisterPage = lazy(() => import('pages/AuthPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/AuthPages/LoginPage'));
const HomePage = lazy(() => import('pages/Home'));
const StatisticsPage = lazy(() => import('pages/Statistics'));

export const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="statistics" element={<StatisticsPage />} />
    </Routes>
  );
};

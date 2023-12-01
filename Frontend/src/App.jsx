import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const RegisterPage = lazy(() => import('pages/AuthPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/AuthPages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};

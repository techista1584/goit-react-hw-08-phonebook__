import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ContactsPage } from './pages/ContactsPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from './redux/hooks/useAuth';
import { refreshUser } from './redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    // Redirect to home page if user is not logged in and not refreshing
    if (!isLoggedIn && !isRefreshing) {
      navigate('/');
    }
  }, [isLoggedIn, isRefreshing, navigate]);

  return isRefreshing ? (
    <h1>Refreshing user... Please wait...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={RegisterPage} redirectTo="/register" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/login" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
        />
        <Route
          path="/logout"
          element={<PrivateRoute component={HomePage} redirectTo="/" />}
        />
      </Route>
    </Routes>
  );
};

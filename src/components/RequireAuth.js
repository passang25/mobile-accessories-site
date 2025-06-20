// src/components/RequireAuth.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';

export default function RequireAuth({ children }) {
  const user = auth.currentUser;
  const location = useLocation();

  if (!user) {
    // 👇 Redirect to login with "from" state to return after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

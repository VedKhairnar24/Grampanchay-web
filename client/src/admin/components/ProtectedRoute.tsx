import React, { useEffect } from 'react';
import { useLocation } from 'wouter';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!token) {
      setLocation('/admin/login');
    }
  }, [token, setLocation]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

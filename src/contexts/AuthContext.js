import React, { createContext, useState, useEffect } from 'react';
import { authAPI } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      const storedUserData = localStorage.getItem('userData');

      if (token && storedUserData) {
        const result = await authAPI.validateToken(token);
        if (result.valid) {
          setUserData(JSON.parse(storedUserData));
          setIsAuthenticated(true);
        } else {
          // Clear invalid tokens
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (token, user) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(user));
    setUserData(user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    setLoading(true);
    await authAPI.logout();
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUserData(null);
    setLoading(false);
  };

  const updateUser = (updatedData) => {
    const newData = { ...userData, ...updatedData };
    setUserData(newData);
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user: userData,
      login,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const storedAuth = localStorage.getItem('isAuthenticated');
      return storedAuth ? JSON.parse(storedAuth) : false;
    } catch (error) {
      console.error('Error reading isAuthenticated from localStorage', error);
      return false;
    }
  });
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error reading user from localStorage', error);
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error saving auth state to localStorage', error);
    }
  }, [isAuthenticated, user]);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

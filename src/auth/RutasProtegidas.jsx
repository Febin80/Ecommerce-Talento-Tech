import React from 'react'
import { Navigate } from 'react-router-dom';

const RutasProtegidos = ({ isAuthenticated, children }) => {

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children;
}

export default RutasProtegidos

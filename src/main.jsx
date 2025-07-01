import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

// Context Providers
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <AuthProvider>
      <CartProvider>
        <App />
        <ToastContainer/>
      </CartProvider>
    </AuthProvider>
    </Router>
  </StrictMode>,
)

import { useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contactos from './pages/Contactos'
import NotFound from './pages/NotFound'
import Header from './components/estaticos/Header'
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/Login'
import RutasProtegidas from './auth/RutasProtegidas'
import Admin from './pages/Admin'
import { AuthContext } from './context/AuthContext'
import { AdminProvider } from './context/AdminContext'

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/productos" element={<GaleriaDeProductos />} />
        <Route path="/productos/:id" element={<DetallesProductos />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route 
          path="/admin" 
          element={
            <RutasProtegidas isAuthenticated={isAuthenticated}>
              <AdminProvider><Admin /></AdminProvider>
            </RutasProtegidas>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

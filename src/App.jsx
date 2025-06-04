import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
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
import { CartContext } from './context/CartContext'


function App() {
  const { cart, handleAddToCart, handleDeleteFromCart, increase, decrease, productos, cargando, isAuthenticated } = useContext(CartContext);

  return (
    <Router>
      <>
        <Header 
          cartItems={cart} 
          eliminarCarrito={handleDeleteFromCart}
          increase={increase}
          decrease={decrease}
        />
        <Routes>
          <Route path="/" element={
            <Home 
              agregarCarrito={handleAddToCart} 
              eliminarCarrito={handleDeleteFromCart} 
              cart={cart} 
              productos={productos} 
              cargando={cargando}
              increase={increase}
              decrease={decrease}
            />
          } />
          <Route path ="/acerca-de" element={<AcercaDe eliminarCarrito={handleDeleteFromCart} cart={cart}/>} />
          <Route path='/productos' element={<GaleriaDeProductos agregarCarrito={handleAddToCart} eliminarCarrito={handleDeleteFromCart} cart={cart} productos={productos} cargando={cargando}/>} />

          <Route path='/productos/:id' element={<DetallesProductos productos={productos} />} />


          <Route path='/contacto' element={<Contactos eliminarCarrito={handleDeleteFromCart} cart={cart}/>} />


<Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}><Admin/></RutasProtegidas>} />
          <Route path='/login' element={<Login/>} />


          <Route path='*' element={<NotFound/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App

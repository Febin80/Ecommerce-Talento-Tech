import { useState , useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contactos from './pages/Contactos'
import NotFound from './pages/NotFound'
import Header from './components/estaticos/Header'
import Cart from './components/Cart'
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/Login'
import RutasProtegidas from './auth/RutasProtegidas'
import Admin from './pages/Admin'


function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated,setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetch('/data/data.json')

      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 5000);
      })
      .catch(error => {
        console.log('Error al cargar los datos:', error)
        setError(true)
        setCargando(false)
      })  
  }, [])
  

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if(productInCart){
      setCart(cart.map((item) => 
        item.id === product.id 
          ? {...item, cantidad: item.cantidad + product.cantidad}
          : item
      ));
    } else {
      setCart([...cart, {...product, cantidad: product.cantidad}]);
    }

    setProductos(productos.map(item =>
      item.id === product.id
        ? {...item, stock: item.stock - product.cantidad}
        : item
    ));
  };

  const handleDeleteFromCart = (producto) => {
    setCart(prevCart => 
      prevCart
        .map(item => {
          if (item.id === producto.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            }
            return null; 
          }
          return item;
        })
        .filter(item => item !== null)
    );
  };
  
  const increase = (producto) => {
    setCart(cart.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const decrease = (producto) => {
    setCart(prevCart => 
      prevCart
        .map(item => {
          if (item.id === producto.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            }
            return null; 
          }
          return item;
        })
        .filter(item => item !== null)
    );
  };

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
              setCart={setCart} 
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

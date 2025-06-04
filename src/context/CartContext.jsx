import {createContext ,useEffect,useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

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
    <CartContext.Provider value={{cart,productos ,setProductos,cargando,error,isAuthenticated,setIsAuthenticated,handleAddToCart,handleDeleteFromCart,increase,decrease}}>
      {children}
    </CartContext.Provider>
  )
}


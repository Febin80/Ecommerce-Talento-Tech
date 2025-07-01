import React, { useContext } from 'react'
import { Link,useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const DetallesProductos = () => {
  const { id } = useParams();
  const { productos, cargando } = useContext(CartContext);

  if (cargando) {
    return <p>Cargando producto...</p>;
  }

  const product = productos.find(p => String(p.id) === String(id));
  
  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product ? (
        <>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <img src={product.img} alt={product.name} style={{maxWidth: '300px'}} />
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
      <div>
        <Link to="/">Volver a la página de inicio</Link>
      </div>
    </div>
  )
}

export default DetallesProductos
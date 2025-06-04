import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProductos = ({productos = []}) => {
  const { id } = useParams();

  const product = productos.find(product => String(product.id) === String(id));
  
  return (
    <div>
      <h2>Detalles del Producto {id}</h2>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <img src={product.img} alt={product.name} style={{maxWidth: '300px'}} />
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
      <div>
            <a href="/">página de inicio</a>
            </div>
    </div>
    
  )
}

export default DetallesProductos
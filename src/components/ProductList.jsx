import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

  const {productos} = useContext(CartContext);
  
  return (
    <>
      <h2>Galeria De Productos</h2>
      {productos && productos.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {productos.map((producto) => (
            <div key={producto.id}>
              <Productos producto={producto} />
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </>
  )
}

export default ProductList
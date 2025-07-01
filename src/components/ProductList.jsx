import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);
  
  return (
    <>
      <h2>Galeria De Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          display: 'block',
          margin: '2rem auto',
          width: '50%',
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }} />
      {productosFiltrados && productosFiltrados.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {productosFiltrados.map((producto) => (
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
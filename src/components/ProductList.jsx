import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos, agregarCarrito, increase, decrease }) => {
  return (
    <>
      <h2>Galeria De Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {productos.map((productos) => (
          <div key={productos.id}>
            <Productos 
              productos={productos} 
              agregarCarrito={agregarCarrito}
              increase={increase}
              decrease={decrease}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
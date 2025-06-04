import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleProductos.css'

const Productos = ({productos, agregarCarrito}) => {
  const [cantidad, setCantidad] = useState(1)

  const increase = () => {
    if (cantidad < productos.stock) {
      setCantidad(cantidad + 1)
    }
  }

  const decrease = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <section className='card'>
      <div className='imagenContainer'>
        <img src={productos.img} alt="" className='imagen'/>
      </div>
      <h3 className='nombre'>{productos.name}</h3>
      <p className='precio'>${productos.price}</p>
      <p className='stock'>stock {productos.stock}</p>

      <div>
        <button className='qtyButton' onClick={decrease} disabled={cantidad === 1}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase} disabled={cantidad >= productos.stock}>+</button>
      </div>
      <button 
        onClick={() => agregarCarrito({...productos, cantidad})}
        disabled={productos.stock === 0}
      >
        Agregar al carrito
      </button>

      <Link to={`/productos/${productos.id}`}>Ver mas</Link>
    </section>
  )
}

export default Productos

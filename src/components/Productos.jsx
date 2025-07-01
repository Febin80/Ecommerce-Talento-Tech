import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './styleProductos.css'
import { CartContext } from '../context/CartContext'

const Productos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1)

  const { agregarCarrito } = useContext(CartContext)

  const increase = () => {
    if (cantidad < producto.stock) {
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
        <img src={producto.img} alt={producto.name} className='imagen'/>
      </div>
      <h3 className='nombre'>{producto.name}</h3>
      <p className='precio'>${producto.price}</p>
      <p className='stock'>stock {producto.stock}</p>

      <div>
        <button className='qtyButton' onClick={decrease} disabled={cantidad === 1}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase} disabled={cantidad >= producto.stock}>+</button>
      </div>
      <button 
        onClick={() => agregarCarrito({...producto, cantidad})}
        disabled={producto.stock === 0}
      >
        Agregar al carrito
      </button>

      <Link to={`/productos/${producto.id}`}>Ver mas</Link>
    </section>
  )
}

export default Productos

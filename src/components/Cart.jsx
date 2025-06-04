import React from 'react'
import './styleCart.css'

const Cart = ({cartItems ,isOpen,onClose,eliminarCarrito,increase,decrease }) => {
  return (
    <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
      <div className='cart-header'>
        <h1>Carrito de Compras</h1>
        <button onClick={onClose} className='close-button'>x</button>
      </div>
      <div className='cart-content'>
        <h2 style={{color:'orange'}}>Productos en el Carrito</h2>
        {cartItems.length === 0 ? (
          <p style={{color:'red'}}>Tu carrito está vacío.</p>
        ) : (
          <ul className='cart-items'>
            {cartItems.map((item) => (
              <li key={item.id} style={{color:'black'}}>
                {item.name} - ${item.price}
                <button className='qtyButton' onClick={() => decrease(item)}>-</button>
                <span style={{margin: '0 10px'}}>{item.cantidad || 0}</span>
                <button className='qtyButton' onClick={() => increase(item)}>+</button>
                <button 
                  onClick={() => eliminarCarrito(item)} 
                  className="delete-button"
                >
                  <i className='fa-solid fa-trash'></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cart

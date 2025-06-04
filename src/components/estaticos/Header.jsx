import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styleEstatico.css';
import Cart from '../Cart';

const Header = ({ cartItems, eliminarCarrito, increase, decrease }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <h1>Tienda Online</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link">
              Contactos
            </Link>
          </li>
          <li>
            <Link to="/acerca-de" className="link">
              Acerca de Nosotros
            </Link>
          </li>
          <li className="cartItems">
            <button className="btnCart" onClick={() => setCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart
              eliminarCarrito={eliminarCarrito}
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
              increase={increase}
              decrease={decrease}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart';

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isCartOpen, setCartOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MiTienda
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" end to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productos">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/acerca-de">
                  Acerca de
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              {isAuthenticated && user?.role === 'admin' && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
            <div className="d-flex align-items-center">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text me-3">
                    Hola, {user?.name || 'Usuario'}
                  </span>
                  <button className="btn btn-outline-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <Link className="btn btn-outline-light" to="/login">
                  Login
                </Link>
              )}
              <button className="btn btn-outline-light ms-3 position-relative" onClick={() => setCartOpen(true)}>
                <i className="fa-solid fa-cart-shopping"></i>
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Header;
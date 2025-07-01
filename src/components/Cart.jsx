import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cart, handleDeleteFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <>
      {isOpen && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}

      <div
        className={`offcanvas offcanvas-end text-bg-light${isOpen ? ' show' : ''}`}
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="cartOffcanvasLabel">Carrito de Compras</h5>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          {cart.length === 0 ? (
            <div className="text-center my-auto">
              <p className="lead">Tu carrito está vacío.</p>
              <p className="text-muted">¡Añade productos para verlos aquí!</p>
            </div>
          ) : (
            <>
              <ul className="list-group list-group-flush flex-grow-1">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex align-items-center bg-transparent">
                    <img src={item.img || 'https://via.placeholder.com/60'} alt={item.name} className="me-3 rounded" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    <div className="flex-grow-1">
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">${item.price}</small>
                      <div className="d-flex align-items-center mt-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQuantity(item)} disabled={item.cantidad <= 1}>-</button>
                        <span className="mx-2">{item.cantidad}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQuantity(item)} disabled={item.cantidad >= item.stock}>+</button>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="fw-bold">${(item.price * item.cantidad).toFixed(2)}</span>
                      <button onClick={() => handleDeleteFromCart(item)} className="btn btn-sm btn-link text-danger p-0 mt-1">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-3 border-top">
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-grid gap-2">
                  <Link to="/checkout" className="btn btn-primary" onClick={onClose}>
                    Finalizar Compra
                  </Link>
                  <button onClick={clearCart} className="btn btn-outline-danger">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

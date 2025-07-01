import React, { useContext } from 'react'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import { CartContext } from '../context/CartContext'

const GaleriaDeProductos = () => {
  const { cargando } = useContext(CartContext);
  return (
    <>
      <h1>Galeria de productos</h1>
      {
        cargando ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <ProductList />
        )
      }
      <Footer />
    </>
  )
}

export default GaleriaDeProductos
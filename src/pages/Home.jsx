import React, {useContext} from 'react'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import { CartContext } from '../context/CartContext'

const Home = () => {

  const { cargando} = useContext(CartContext) 
  return (
    <>
      <main>
        <h1>Bienvenido a nuestra Tienda Online</h1>

        <p>Explora nuestros productos y disfruta de una experiencia de compra única.</p>
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
      </main>
      <Footer />
    </>
  )
}

export default Home
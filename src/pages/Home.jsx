import React from 'react'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'

const Home = ({productos, cargando, agregarCarrito, eliminarCarrito, increase, decrease}) => {
  return (
    <>
      <main>
        <h1>Bienvenido a nuestra Tienda Online</h1>

        <p>Explora nuestros productos y disfruta de una experiencia de compra única.</p>
        {
          cargando ?
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Seven_segment_display-animated.gif"></img> 
           :
            <ProductList 
              agregarCarrito={agregarCarrito} 
              eliminarCarrito={eliminarCarrito} 
              productos={productos}
              increase={increase}
              decrease={decrease}
            />
        }
      </main>
      <Footer />
    </>
  )
}

export default Home
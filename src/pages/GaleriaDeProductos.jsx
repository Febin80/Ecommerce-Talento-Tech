import React from 'react'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'

const GaleriaDeProductos = ({productos,cargando,agregarCarrito,eliminarCarrito}) => {
  return (
    <>
    
      <h1>Galeria de productos</h1>
      {
          cargando ?
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Seven_segment_display-animated.gif"> 
            </img> :
        
        <ProductList agregarCarrito={agregarCarrito} eliminarCarrito={ eliminarCarrito}  productos={productos} />
      }
      <Footer/>
    </>
  )
}

export default GaleriaDeProductos
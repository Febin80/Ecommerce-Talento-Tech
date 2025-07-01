import React from 'react'
import Footer from '../components/estaticos/Footer'
import { Link } from 'react-router-dom'

const AcercaDe = () => {
  return (
    <div>
      <h1>Acerca de Nosotros</h1>
      <p>Somos una tienda en línea dedicada a ofrecer los mejores productos a nuestros clientes.</p>
      <p>Nuestra misión es proporcionar una experiencia de compra excepcional y productos de alta calidad.</p>
      <p>Contamos con un equipo comprometido y apasionado por el servicio al cliente.</p>
      <p>¡Gracias por elegirnos!</p>
      <Link to="/">página de inicio</Link>
      <Footer/>
    </div>
  )
}

export default AcercaDe

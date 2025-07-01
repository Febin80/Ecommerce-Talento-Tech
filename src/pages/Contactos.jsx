import React from 'react'
import Footer from '../components/estaticos/Footer'
import { Link } from 'react-router-dom'

const Contactos = () => {
  return (
    <>
      <h1>Contactos</h1>
      <p>Para consultas, por favor envíenos un correo a: </p>
      <Link to="/">página de inicio</Link>
      <Footer/> 
    </>
  )
}

export default Contactos

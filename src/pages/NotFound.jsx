import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Página No Encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <p>Por favor, verifica la URL o regresa a la <Link to="/">página de inicio</Link>.</p>
        <button><Link to="/">Volver a Inicio</Link></button>
    </div>
  )
}

export default NotFound
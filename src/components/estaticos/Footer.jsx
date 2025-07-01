import React from 'react'
import './styleEstatico.css' 
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
        <footer style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
            <p>© 2023 Tienda Online. Todos los derechos reservados.</p>
            <p>Desarrollado por [kevin kuo]</p>
            <p><Link to="/acerca-de">Acerca de Nosotros</Link> | <Link to="/contacto">Contacto</Link></p>
        </footer>
      
  )
}

export default Footer
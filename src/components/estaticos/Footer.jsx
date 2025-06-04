import React from 'react'
import './styleEstatico.css' 


const Footer = () => {
  return (
        <footer style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
            <p>© 2023 Tienda Online. Todos los derechos reservados.</p>
            <p>Desarrollado por [kevin kuo]</p>
            <p><a href="/acerca-de">Acerca de Nosotros</a> | <a href="/contacto">Contacto</a></p>
        </footer>
      
  )
}

export default Footer
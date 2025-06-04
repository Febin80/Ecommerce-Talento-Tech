import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Iniciar Sesión</h1>
        <form>
            <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
        <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
  )
}

export default Login
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!email) validationErrors.email = 'El correo electrónico es obligatorio.';
    if (!password) validationErrors.password = 'La contraseña es obligatoria.';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});

    try {
      const res = await fetch('/data/users.json');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
      const users = await res.json();
      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (foundUser) {
        login(foundUser);
        navigate(foundUser.role === 'admin' ? '/admin' : '/');
      } else {
        setErrors({ form: 'Credenciales inválidas. Por favor, intente de nuevo.' });
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrors({ form: 'Ocurrió un error al iniciar sesión. Por favor, intente más tarde.' });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4">Iniciar Sesión</h1>
              <form onSubmit={handleSubmit} noValidate>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Iniciar Sesión
                  </button>
                </div>

                <p className="mt-3 text-center">
                  ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
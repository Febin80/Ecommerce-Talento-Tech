import React, { useContext } from "react";
import FormularioProducto from "../components/admin/FormularioProducto";
import FormularioEdicion from "../components/admin/FormularioEdicion";
import { AuthContext } from "../context/AuthContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { logout } = useContext(AuthContext);
  const {
    productos = [],
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actulizarProducto,
    eliminarProducto,
  } = useContext(AdminContext);

  const navigate = useNavigate();

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center my-4">
            <h1 className="h2">Panel Administrativo</h1>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <i className="fa-solid fa-right-from-bracket me-2"></i>
              Salir
            </button>
          </div>

          <div className="row">
            {productos.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fs-4 fw-bold">${product.precio}</p>
                    <div className="mt-auto">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => {
                          setOpenEditor(true);
                          setSeleccionado(product);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => eliminarProducto(product.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <button className="btn btn-success my-4" onClick={() => setOpen(true)}>
        <i className="fa-solid fa-plus me-2"></i>
        Agregar producto nuevo
      </button>
      <div className="my-4">
        {open && <FormularioProducto onAgregar={agregarProducto} />}
        {openEditor && (
          <FormularioEdicion
            productoSeleccionado={seleccionado}
            onActualizar={actulizarProducto}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;

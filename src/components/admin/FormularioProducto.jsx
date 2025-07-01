import React, { useState } from "react";

const FormularioProducto = ({ onAgregar }) => {
  const [name, setName] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !precio || !stock || !img || !category) {
      // Podrías agregar una notificación de error aquí
      alert("Por favor, completa todos los campos.");
      return;
    }
    onAgregar({
      name,
      precio: parseFloat(precio),
      stock: parseInt(stock, 10),
      img,
      category,
    });
    // Limpiar formulario
    setName("");
    setPrecio("");
    setStock("");
    setImg("");
    setCategory("");
  };

  return (
    <div className="card bg-light">
      <div className="card-body">
        <h3 className="card-title mb-4">Agregar Nuevo Producto</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="nombre" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio:</label>
            <input type="number" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">Stock:</label>
            <input type="number" className="form-control" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Imagen URL:</label>
            <input type="text" className="form-control" id="img" value={img} onChange={(e) => setImg(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Categoría:</label>
            <input type="text" className="form-control" id="categoria" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Agregar Producto</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioProducto;
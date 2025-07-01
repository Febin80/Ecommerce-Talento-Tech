import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export const AdminContext = createContext()



export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)
    const apiUrl = 'https://682ddccf746f8ca4a47ae656.mockapi.io/productos-ecommerce/productos'


    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl)
            if (!res.ok) throw new Error('Error al cargar productos');
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            console.log('Error al cargar productos ', error);

        }
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                title: ":)!",
                text: "Producto agregado correctamente!",
                icon: "success"
            });
            cargarProductos()
            setOpen(false)
        } catch (error) {
            console.log(error.message);

        }
    }

    const actulizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!respuesta.ok) throw Error('Error al actualizar el producto')
            const data = await respuesta.json()
            alert('Producto actualizado correctamente')
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            console.log(error.message);

        }
    }

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('Estas seguro de eliminar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE',
                })
                if (!respuesta.ok) throw Error('Error al eliminar')
                
                Swal.fire({
                    title: ":(!",
                    text: "Producto Eliminado correctamente!",
                    icon: "error"
                });
                cargarProductos()
            } catch (error) {
                alert('Hubo un problema al eliminar el producto')
            }
        }
    }

    return (
        <AdminContext.Provider value={{
            productos,
            loading,
            error,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actulizarProducto,
            eliminarProducto,
        }}>
            {children}
        </AdminContext.Provider>
    )
}
import React,{ useState } from 'react'

const FormularioProducto = ({onAgregar}) => {

const [producto , setProductos ]=useState({
    name: '',
    price: '',
    stock: '',
})
const [error, setError] = useState();

const hundleChange = (e) => {
    const { name, value } = e.target;
    setProductos({
        ...producto,
        [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   
    onAgregar(producto);
    setProductos({ name: '', price: '', stock: '' });
    
}

  return (
    <div>
      
    </div>
  )
}

export default FormularioProducto

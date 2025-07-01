import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [cart, setCart] = useState(() => {
        try {
            const cartFromStorage = localStorage.getItem('cart');
            return cartFromStorage ? JSON.parse(cartFromStorage) : [];
        } catch (error) {
            console.error("Error reading cart from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
            fetch('/data/data.json')
                .then(res => res.json())
                .then(data => {
                    setProductos(data);
                })
                .catch(err => console.error("Error fetching products:", err))
                .finally(() => setCargando(false));
        }, 5000); 
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Error saving cart to localStorage", error);
        }
    }, [cart]);

    const agregarCarrito = (itemToAdd) => {
        const existingItem = cart.find(item => item.id === itemToAdd.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.id === itemToAdd.id
                    ? { ...item, cantidad: item.cantidad + itemToAdd.cantidad }
                    : item
            ));
            toast.info(`Se actualizó la cantidad de ${itemToAdd.name} en el carrito.`);
        } else {
            setCart([...cart, itemToAdd]);
            toast.success(`"${itemToAdd.name}" ha sido agregado al carrito.`);
        }
    };

    const handleDeleteFromCart = (itemToRemove) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemToRemove.id));
    };

    const increaseQuantity = (itemToIncrease) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemToIncrease.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (itemToDecrease) => {
        setCart(prevCart =>
            prevCart.map(item =>
                (item.id === itemToDecrease.id && item.cantidad > 1)
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        toast.info("El carrito ha sido vaciado.");
    };

    const value = {
        productos,
        cargando,
        cart,
        agregarCarrito,
        handleDeleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
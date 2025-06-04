# Ecommerce Talento Tech

Este es un proyecto de tienda online desarrollado con **React** como parte del curso Talento Tech.

## Características

- Catálogo de productos con stock
- Carrito de compras con suma, resta y eliminación de productos
- Actualización automática de stock
- Navegación entre páginas (Home, Productos, Contacto, Acerca de)
- Página de detalles de producto
- Panel de administración protegido (login requerido)
- Responsive y fácil de usar

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Febin80/Ecommerce-Talento-Tech.git
   cd Ecommerce-Talento-Tech
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación:
   ```bash
   npm run dev
   ```
   o
   ```bash
   npm start
   ```

4. Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal) en tu navegador.

## Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo (Vite)
- `npm run build` — Genera la versión de producción
- `npm start` — Inicia la app (si usas Create React App)

## Estructura del proyecto

```
src/
  components/
    Cart.jsx
    DetallesProductos.jsx
    estaticos/
      Header.jsx
      Footer.jsx
    ProductList.jsx
    Productos.jsx
  pages/
    Home.jsx
    GaleriaDeProductos.jsx
    Contactos.jsx
    AcercaDe.jsx
    Login.jsx
    Admin.jsx
  App.jsx
  main.jsx
  ...
public/
  data/
    data.json
```

## Autor

- [Febin80](https://github.com/Febin80)

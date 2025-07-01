# E-commerce "MiTienda" - Proyecto Final Talento Tech

Este es un proyecto de una tienda online moderna y funcional, desarrollado con **React** y **Vite** como parte del curso Talento Tech. La aplicación simula una experiencia de e-commerce completa, desde la visualización de productos hasta un panel de administración protegido.

## ✨ Key Features

-   **Catálogo de Productos**: Navegación fluida por la galería de productos.
-   **Detalles de Producto**: Página dedicada para cada artículo.
-   **Carrito de Compras Dinámico**:
    -   Añadir, eliminar y actualizar cantidad de productos.
    -   Cálculo de subtotal y total en tiempo real.
    -   Persistencia del carrito en `localStorage`.
    -   Interfaz moderna y responsiva (Offcanvas de Bootstrap).
-   **Sistema de Autenticación**:
    -   Login de usuarios.
    -   Roles de usuario (cliente y administrador).
    -   Estado de sesión persistente.
-   **Panel de Administración Protegido**:
    -   Ruta `/admin` accesible solo para usuarios administradores.
    -   Integración con una **Mock API** para gestionar los datos.
-   **Diseño Responsivo**: Interfaz adaptable a cualquier dispositivo gracias a **Bootstrap 5**.
-   **Notificaciones al Usuario**: Feedback visual con `react-toastify` y `sweetalert2` para una mejor experiencia.

## 🛠️ Tecnologías y Librerías

-   **Frontend**: React, Vite
-   **Routing**: React Router DOM
-   **Estilos**: Bootstrap 5, Font Awesome
-   **Gestión de Estado**: React Context API
-   **Notificaciones**: React Toastify, SweetAlert2
-   **API**: MockAPI (para el panel de administración)

## 🚀 Getting Started

Sigue estos pasos para tener una copia local del proyecto funcionando.

### Prerrequisitos

Asegúrate de tener Node.js instalado en tu sistema.
-   Node.js (v18 o superior recomendado)

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/Febin80/Ecommerce-Talento-Tech.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd Ecommerce-Talento-Tech
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

## 🏃‍♂️ Uso

### Iniciar el Servidor de Desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta:
```bash
npm run dev
```
Abre http://localhost:5173 (o el puerto que indique la terminal) en tu navegador.

### Acceso al Panel de Administración

Para acceder al panel de administración, utiliza las siguientes credenciales en la página de Login. Estos datos se encuentran en `public/data/users.json`.

-   **Email**: `admin@admin.com`
-   **Contraseña**: `admin123`

*(Nota: Estas son credenciales de ejemplo. Puedes modificarlas en el archivo `users.json`)*

## 📁 Estructura del Proyecto
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

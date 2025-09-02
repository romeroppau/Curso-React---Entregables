import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404'; // si lo creás

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <NavBar cantidadCarrito={carrito.length} />

      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenidos a Ginkgo Biloba, tu alojamiento de confianza"
              onAddToCart={agregarAlCarrito}
            />
          }
        />

        {/* Ruta dinámica por categoría */}
        <Route
          path="/categoria/:idCategoria"
          element={
            <ItemListContainer
              onAddToCart={agregarAlCarrito}
            />
          }
        />

        {/* Ruta dinámica para detalle de producto */}
        <Route
          path="/producto/:idProducto"
          element={
            <ItemDetailContainer onAddToCart={agregarAlCarrito} />
          }
        />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </>
  );
}

export default App;

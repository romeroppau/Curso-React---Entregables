import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  return (
    <>
      <NavBar cantidadCarrito={carrito.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenidos a Ginkgo Biloba, tu alojamiento de confianza"
              onAddToCart={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/espacios"
          element={
            <ItemListContainer
              greeting="Nuestros Espacios"
              onAddToCart={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/nosotros"
          element={
            <ItemListContainer
              greeting="Sobre Nosotros"
              onAddToCart={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/anuncio"
          element={
            <ItemListContainer
              greeting="Nuestro anuncio"
              onAddToCart={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/contacto"
          element={
            <ItemListContainer
              greeting="Contacto"
              onAddToCart={agregarAlCarrito}
            />
          }
        />
      </Routes>

    </>
  );
};

export default App;

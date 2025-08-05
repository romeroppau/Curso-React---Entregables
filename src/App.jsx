import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Inicio" />} />
        <Route path="/espacios" element={<ItemListContainer greeting="Nuestros Espacios" />} />
        <Route path="/nosotros" element={<ItemListContainer greeting="Sobre Nosotros" />} />
        <Route path="/anuncio" element={<ItemListContainer greeting="Nuestro anuncio" />} />
        <Route path="/contacto" element={<ItemListContainer greeting="Contacto" />} />
      </Routes>
    </>
  );
};

export default App;

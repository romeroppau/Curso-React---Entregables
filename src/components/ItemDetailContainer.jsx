import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

import ginkgoImg from "../assets/images/Ginkgo Biloba.jpg";
import lavandaImg from "../assets/images/Lavanda.png";
import quebrachoImg from "../assets/images/Quebracho.png";

const departamentos = [
  { id: 1, nombre: "Ginkgo Biloba", precio: 50000, categoria: "espacios", img: ginkgoImg },
  { id: 2, nombre: "Lavanda", precio: 65000, categoria: "espacios", img: lavandaImg },
  { id: 3, nombre: "Quebracho", precio: 70000, categoria: "espacios", img: quebrachoImg }
];

const ItemDetailContainer = ({ onAddToCart }) => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        const encontrado = departamentos.find(dep => dep.id === parseInt(idProducto));
        resolve(encontrado);
      }, 1000);
    });

    obtenerProducto.then(setProducto);
  }, [idProducto]);

  return (
    <section>
      {producto ? (
        <ItemDetail producto={producto} onAddToCart={onAddToCart} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;

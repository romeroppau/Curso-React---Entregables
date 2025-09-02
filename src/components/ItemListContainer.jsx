import './css/ItemListContainer.css';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ginkgoImg from "../assets/images/Ginkgo Biloba.jpg";
import lavandaImg from "../assets/images/Lavanda.png";
import quebrachoImg from "../assets/images/Quebracho.png";

// Simulación de productos
const departamentos = [
    { id: 1, nombre: "Ginkgo Biloba", precio: 50000, categoria: "espacios", img: ginkgoImg },
    { id: 2, nombre: "Lavanda", precio: 65000, categoria: "espacios", img: lavandaImg },
    { id: 3, nombre: "Quebracho", precio: 70000, categoria: "espacios", img: quebrachoImg },
];

const ItemListContainer = ({ greeting, onAddToCart }) => {
    const { idCategoria } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const obtenerItems = new Promise((resolve) => {
            setTimeout(() => {
                const filtrados = idCategoria
                    ? departamentos.filter(dep => dep.categoria === idCategoria)
                    : departamentos;
                resolve(filtrados);
            }, 1000);
        });

        obtenerItems.then(setItems);
    }, [idCategoria]);

    return (
        <section>
            <p>{greeting}</p>

            {/* Sección personalizada: Sobre Nosotros */}
            {idCategoria === "nosotros" && (
                <div className="info-nosotros">
                    <h2>Sobre Nosotros</h2>
                    <p>
                        Somos una familia que abre las puertas de sus espacios para ofrecerte una estadía confortable en Luján, rodeada de naturaleza, tranquilidad y detalles pensados para tu descanso.
                        En Ginkgo Biloba creemos en la hospitalidad auténtica, en el diseño sustentable y en crear experiencias que conecten con lo esencial.
                        Cada rincón fue creado con amor, y cada huésped es recibido como parte de nuestra historia.
                    </p>
                </div>
            )}

            {/* Sección personalizada: Nuestro Anuncio */}
            {idCategoria === "anuncio" && (
                <div className="info-anuncio">
                    <h2>¡Nuevo anuncio!</h2>
                    <p>
                        Ya podés hacer tu reserva directamente a través de la plataforma Airbnb.
                        Nuestro espacio “Ginkgo Biloba” en Luján está disponible para recibirte con todas las comodidades que necesitás para una estadía inolvidable.
                        <br />
                        Reservá desde este enlace:{" "}
                        <a
                            href="https://es-l.airbnb.com/rooms/1424744595071803130?guests=1&adults=1&s=67&unique_share_id=0b9ee3f0-471f-4be6-bcfc-8537083daacc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver alojamiento en Airbnb
                        </a>
                    </p>
                </div>
            )}

            {/* Catálogo de productos (solo si no es una sección informativa) */}
            {idCategoria !== "nosotros" && idCategoria !== "anuncio" && (
                <div className="catalogo">
                    {items.map((dep) => (
                        <div key={dep.id} className="card">
                            <img src={dep.img} alt={dep.nombre} className='imagen' />
                            <h3>{dep.nombre}</h3>
                            <p>${dep.precio} por noche</p>
                            <button onClick={() => onAddToCart(dep)}>Agregar al carrito</button>
                            <Link to={`/producto/${dep.id}`} className="btn-detalle">Ver detalle</Link>
                        </div>
                    ))}
                </div>
            )}
            {/* Sección personalizada: Contacto */}
            {idCategoria === "contacto" && (
                <div className="info-contacto">
                    <h2>Contacto</h2>
                    <p>
                        Podés encontrarnos en nuestro Instagram:{" "}
                        <a
                            href="https://www.instagram.com/alojamiento.ginkgobiloba"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @alojamiento.ginkgobiloba
                        </a>
                        <br />
                        También podés escribirnos por WhatsApp al:{" "}
                        <a
                            href="https://wa.me/5492323531350"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            +54 9 2323 531350
                        </a>
                    </p>
                </div>
            )}

        </section>
    );
}

export default ItemListContainer;

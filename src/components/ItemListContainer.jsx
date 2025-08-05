import './css/ItemListContainer.css';
import ginkgoImg from "../assets/images/Ginkgo Biloba.jpg";
import lavandaImg from "../assets/images/Lavanda.png";
import quebrachoImg from "../assets/images/Quebracho.png";

const departamentos = [
    {
        id: 1,
        nombre: "Ginkgo Biloba",
        precio: 50000,
        img: ginkgoImg,
    },
    {
        id: 2,
        nombre: "Lavanda",
        precio: 65000,
        img: lavandaImg
    },
    {
        id: 3,
        nombre: "Quebracho",
        precio: 70000,
        img: quebrachoImg
    }
];

const ItemListContainer = ({ greeting, onAddToCart}) => {
    return (
        <section>
            <p>{greeting}</p>
            <div className="catalogo">
                {departamentos.map((dep) => (
                    <div key={dep.id} className="card">
                        <img src={dep.img} alt={dep.nombre} className='imagen'/>
                        <h3>{dep.nombre}</h3>
                        <p>${dep.precio} por noche</p>
                        <button onClick={() => onAddToCart(dep)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default ItemListContainer;
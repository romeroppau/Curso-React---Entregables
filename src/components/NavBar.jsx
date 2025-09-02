import CartWidget from "./CartWidget";
import './css/NavBar.css';
import { Link } from "react-router-dom";
import hojaImg from "../assets/images/Hoja.png"


const NavBar = ({ cantidadCarrito }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={hojaImg} alt="hoja de Ginkgo" className="logo-img" />
                <h1 className="titulo">Ginkgo Biloba</h1>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categoria/nosotros">Sobre Nosotros</Link></li>
                <li><Link to="/categoria/anuncio">Nuestro anuncio</Link></li>
                <li><Link to="/categoria/contacto">Contacto</Link></li>
            </ul>
            <CartWidget cantidad={cantidadCarrito} />
        </nav>
    );
};
export default NavBar;

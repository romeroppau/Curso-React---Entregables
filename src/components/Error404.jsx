import { Link } from 'react-router-dom';
import './css/Error404.css';
const Error404 = () => {
  return (
    <div className="error404">
      <h2>404 - Página no encontrada</h2>
      <p>La ruta que estás buscando no existe o fue movida.</p>
      <Link to="/" className="volver">Volver al inicio</Link>
    </div>
  );
};

export default Error404;

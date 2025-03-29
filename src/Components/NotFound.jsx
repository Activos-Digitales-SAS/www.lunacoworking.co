import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb"; // Asegúrate de tener react-icons instalado

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <TbError404 className="notfound-icon" />
        <h1 className="notfound-title">Página no encontrada</h1>
        <p className="notfound-text">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="notfound-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

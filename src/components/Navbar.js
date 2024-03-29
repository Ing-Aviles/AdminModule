import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Logo from '../imagenes/Logo.png';
//import { useUserContext } from "../context/contextUser/ContextUser";

const Navbar = () => {
  //const [user, setUser] = useUserContext();

  const logout = () => {
    window.localStorage.removeItem("userPET");
    //setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg crema-bg">
      <div className="container-fluid">
        {/* <Link to="/"> */}
          <img src={Logo} className="style-image" alt="Logo" />
        {/* </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Admin-Dashboard" className="nav-link">
                Panel de administracion
              </Link>
            </li>
            <li className="nav-item">
              <button to="/Mascotas-Perdidas" className="nav-link">
                Mascotas reportadas
              </button>
            </li>
            <li className="nav-item">
              <Link to="/Collaborator-Request" className="nav-link">
                Bandeja de solicitudes
              </Link> 
            </li>
            <li className="nav-item">
            </li>
          </ul>
          
            <div className="d-flex">
              <a onClick={logout} className="btn btn-danger">
                Salir
              </a>
            </div>
          
            {/* <div className="d-flex">
              <a href="/Login" className="btn btn-secondary me-2">
                Inicia Sesión
              </a>
              <a href="/Signup" className="btn btn-secondary">
                Regístrate
              </a>
            </div> */}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
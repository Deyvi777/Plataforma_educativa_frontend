import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./style.css";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const Navbar = () => {
  const [value, setValue] = useLocalStorage("auth", null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    //console.log("🚀 ~ file: Navbar.js ~ line 13 ~ useEffect ~ value", value);
    if (value !== null) {
      const data = JSON.parse(value);
      if (data && data.user) setUser(data.user);
    }
  }, [value]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="img/Logo.png" alt="logo" width="120" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toogle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teachers">
                Profesores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contactos
              </Link>
            </li>
          </ul>
        </div>
        
        {value && user ? (
          <>
            <div className="dropdown">
              <img type="button" id="dropdownMenuButton" data-toggle="dropdown" src="img/user.png" alt={user.fullname} width="50" />
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <h5 class="dropdown-header">{user.fullname}</h5>
                <Link className="dropdown-item" to="#">Perfil</Link>
                <Link className="dropdown-item" to="#">Subir a Premium</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item text-danger" onClick={() => {setValue(null); window.location.href="/";}}>Cerrar sesión</Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Login />
            <Link className="btn btn-outline-light" role="button" to="/signUp">
              Registrate
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

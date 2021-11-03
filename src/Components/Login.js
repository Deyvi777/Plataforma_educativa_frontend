import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useLocalStorage from "../hooks/useLocalStorage";

const Login = () => {
  const [value, setValue] = useLocalStorage("auth");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const send = async (e) => {
    try {
      e.preventDefault();
      const {
        data: { message, token, user },
      } = await axios.post("https://plataforma-educativa-backend.herokuapp.com/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      setValue(JSON.stringify({ token, user }));
      showAlert(message, `Bienvenido ${user.fullname}`, "success");
    } catch (error) {
      showAlert("El correo electronico o la contraseña es incorrecta", "En caso de no estar registrado debes registrarte primero", "error");
    }
  };
  const showAlert = (title, text, icon) => {
    swal({ title, text, icon, button: "Aceptar" }).then((value) => {
      window.location.href="/";
    });
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle mr-sm-2"
        type="button"
        id="dropdownLogin"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Iniciar Seción
      </button>
      <div
        className="dropdown-menu dropdown-menu-right bg-light"
        aria-labelledby="dropdownLogin"
      >
        <form className="px-4 py-3" onSubmit={send}>
          <div className="form-group">
            <label for="exampleDropdownFormEmail1">Iniciar Seción:</label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="Correo electronico"
              required
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Contraseña"
              required
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                Recuerdame
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>

        <Link className="dropdown-item" to="/signUp">
          ¿Eres nuevo? Registrate
        </Link>
        <Link className="dropdown-item" href="#">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
};

export default Login;

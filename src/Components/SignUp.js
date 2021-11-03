import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import swal from 'sweetalert'

const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const send = async e => {
        e.preventDefault();
        const res = await axios.post('https://plataforma-educativa-backend.herokuapp.com/api/auth/signup', {
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        });
    };

    const showAlert = () => {
        swal({
            title: 'Registro exitoso!!!',
            text: 'Felicidades '+ data.name + ' ya eres parte de nuestra comunidad.',
            icon: 'success',
            button: 'Aceptar'
        }).then((value) => {
            window.location.href="/";
          });
    };

    return (
        <div className="container text-center formSignUp">
            <h2>Formulario de registro</h2>
            <form onSubmit={send}>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <input type="text" className="form-control" placeholder="Nombres" required 
                        onChange={(e) => setData({...data, name: e.target.value})} />
                    </div>
                    <div className="form-group col-sm-6">
                        <input type="text" className="form-control" placeholder="Apellidos" required 
                        onChange={(e) => setData({...data, lastName: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Correo electronico" required 
                    onChange={(e) => setData({...data, email: e.target.value})} />
                </div>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <input type="password" required 
                        className={data.password==='' ? 'form-control' : (data.password===data.rePassword ? 'form-control is-valid' : 'form-control')} 
                        placeholder="Contraseña" onChange={(e) => setData({...data, password: e.target.value})} />
                    </div>
                    <div className="form-group col-sm-6">
                        <input type="password" required aria-describedby="validationPassword" 
                        className={data.rePassword==='' ? 'form-control' : (data.password===data.rePassword ? 'form-control is-valid' : 'form-control is-invalid')}
                        placeholder="Repetir contraseña" onChange={(e) => setData({...data, rePassword: e.target.value})} />
                        <div id="validationPassword" class="invalid-feedback">
                            Las contraseñas deben coincidir.
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={showAlert}>Registrarse</button>
            </form>
        </div>
    );
}

export default SignUp;
import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const HomePageBanner = () => {
    return (
        <div className="container">
            <div className="row custom-section d-flex align-items-center">
                <div className="col-12 col-lg-6">
                    <h2>Aprende en la mejor Plataforma Educativa</h2>
                    <p>Encontraras los mejores cursos para complementar tu educacion y ser un gran profesional</p>
                    <Link className="btn btn-primary" role="button" to="/signUp">Registrate</Link>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="img/mainbanner.png" className="img-fluid" alt="Responsive image"/>
                </div>
            </div>
        </div>
    );
}

export default HomePageBanner;
import React from 'react';
import './style.css';
import CursoSm from './CursoSm';
import {Link} from 'react-router-dom';

const HomePageCursos = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center text-center">
                <h2>Cursos Mas populares de la Plataforma</h2>
            </div>
            <div className="row">
                <h3>Cursos mas vistos:</h3>
            </div>
            <div className="row">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">        
                    <CursoSm name="JavaScript" img="img/js.png" />
                    <CursoSm name="HTML" img="img/html.png" />
                    <CursoSm name="C#" img="img/csharp.png" />
                    <CursoSm name="Java" img="img/java.png" />
                </div>
            </div>

            <div className="row">
                <h3>Nuevos Cursos:</h3>
            </div>
            <div className="row">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
                    <CursoSm name="Java" img="img/java.png" />
                    <CursoSm name="React" img="img/react.png" />
                    <CursoSm name="JavaScript" img="img/js.png" />
                    <CursoSm name="CSS" img="img/css.png" />
                </div>
            </div>

            <div className="row">
                <h3>Proximamente:</h3>
            </div>
            <div className="row">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
                    <CursoSm name="Flutter" img="img/flutter.png" />
                    <CursoSm name="Vue.js" img="img/vue.png" />
                    <CursoSm name="Cloud" img="img/cloud.png" />
                    <CursoSm name="Angular" img="img/angular.png" />
                </div>
            </div>
            <div className="row justify-content-md-center"  id="verCursos">
                <Link type="button" className="btn btn-primary" to="/cursos">Ver todos los Cursos</Link>
            </div>
        </div>
    );
}

export default HomePageCursos;
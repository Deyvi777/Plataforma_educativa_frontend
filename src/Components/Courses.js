import React, { useState, useEffect } from 'react';
import Course from './Course';
import './style.css';
import axios from 'axios';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function loadCourses (){
            const res = await axios.get('https://plataforma-educativa-backend.herokuapp.com/api/courses');
            setCourses(res.data);
        }
        loadCourses();
    }, []);
    
    return (
        <div>
            <h2 className="text-center">
                CURSOS
            </h2>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="#">Ordenar por: </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentCourses" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContentCourses">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Puntuacion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nombre</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categoria
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Sistemas</a>
                                <a className="dropdown-item" href="#">Diseño</a>
                                <a className="dropdown-item" href="#">Emprendimiento</a>
                                <a className="dropdown-item" href="#">Administración</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="dropdown-divider"></div>
                <div className="row row-cols-2 row-cols-lg-2 row-cols-xl-4">
                    {
                        courses.map(course => <Course title={course.title} description={course.description} teacher={course.teacher} score={course.score} image={course.image} key={course._id} to={`/curso/${course._id}`}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Courses;
import React from 'react';
import Teacher from './Teacher';
import './style.css';

const HomePageTeachers = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center text-center">
                <h2>Nuestros Profesores</h2>
            </div>
            
            <div className="container-fluid" id="teachers">
                <div className="row row-cols-2 row-cols-md-2 row-cols-xl-4">
                    <Teacher img="img/teacher.png" name="Nombre Completo del Profesor" />
                    <Teacher img="img/teacher.png" name="Nombre Completo del Profesor" />
                    <Teacher img="img/teacher.png" name="Nombre Completo del Profesor" />
                    <Teacher img="img/teacher.png" name="Nombre Completo del Profesor" />
                </div>
            </div>
        </div>
    );
}

export default HomePageTeachers;
import React from 'react';
import './style.css';

const Teacher = (props) => {
    return (
        <div className="col mb-3">
            <div className="card h-100">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.img} className="card-img" id="imgTeacher" alt="Foto theacher" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Descripcion del profesor.</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <a href="#">Ver cursos</a>
                </div>
            </div>
            
        </div>
        
    );
}

export default Teacher;
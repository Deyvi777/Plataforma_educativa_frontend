import React from 'react';
import './style.css';

const CursoSm = (props) => {
    return (
        <div className="col mb-3">
            <div className="card">
                <a href="#">
                    <img src={props.img} className="card-img-top img-fluid" alt="Imagen"/>
                </a>
            </div>
        </div>
    );
}

export default CursoSm;
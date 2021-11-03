import React from 'react';
import './style.css';

const HomePagePromo = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center text-center">
                <h2>Aprovecha nuestras promociones de descuento!!!</h2>
            </div>
            <div className="row justify-content-md-center" id="promo">
                <img src="img/promo.png" className="img-fluid" alt="Responsive image"/>
            </div>
        </div>
    );
}

export default HomePagePromo;
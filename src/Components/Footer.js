import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
            <div className="container justify-content-md-center">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    <div className="col">
                        <b>Ucatec</b>
                    </div>
                    <div className="col">
                        <b>Contactanos</b>
                    </div>
                    <div className="col">
                        <b>Acerca de Nosotros</b>
                    </div>
                    <div className="col">
                        <b>Soporte</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col social-menu">
                        <ul>
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-whatsapp"></i></a></li>
                            <li><a href=""><i className="fa fa-instagram"></i></a></li>
                            <li><a href=""><i className="fa fa-youtube"></i></a></li>
                            <li><a href=""><i className="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
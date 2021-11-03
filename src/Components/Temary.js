import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const Temary = (props) => {
    const { match } = props;

    const [course, setCourse] = useState({});
    const [temary, setTemary] = useState([]);
    
    useEffect(() => {
        async function loadCourse(){
            const res1 = await axios.get(`https://plataforma-educativa-backend.herokuapp.com/api/courses/${match.params.curso}`);
            const res2 = await axios.get(`https://plataforma-educativa-backend.herokuapp.com/api/courses/temary/${match.params.curso}`);
            setCourse(res1.data);
            setTemary(res2.data);
        }
        loadCourse();
    }, []);

    const stars = [];
    let Score = () => {  
        for(let i=0; i<course.score; i++){
            stars.push(<i className="fa fa-star"></i>);
        }
        for(let i=0; i<5-course.score; i++){
            stars.push(<i className="fa fa-star-o"></i>);
        }
    }
    Score();

    return (
        <div className="container-fluid temary">
            <div className="row row-cols-sm-1 row-cols-lg-2 custom-section">
                <div className="col-12 col-lg-4">
                    <h4><b>Temario:</b></h4>
                    <div className="list-group overflow-auto p-3 border" id="list-tab" role="tablist">
                        {temary.map(tema => tema.level===1? <h3>{tema.title}</h3> : <a className="list-group-item list-group-item-action list-group-item-info" id={'list-'+tema._id+'-list'} data-toggle="list" href={'#list-'+tema._id} role="tab">{tema.title}</a>)}
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="row justify-content-center">
                        <h4><b>Curso de {course.title}</b></h4>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row row-cols-sm-1 row-cols-lg-2">
                                <img src={'https://plataforma-educativa-backend.herokuapp.com/public/'+course.image} className="card-img-top" alt="Imagen del curso" />
                                <p className="p-3 border bg-light">
                                    {course.description} 
                                    <h5><b>Profesor: </b>{course.teacher}</h5>
                                    <h5><b>Puntuación:  </b> {stars}</h5>
                                </p>
                            </div>
                        </div>
                        {temary.map(tema => <div className="tab-pane fade" id={'list-'+tema._id} role="tabpanel">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={tema.video} allowfullscreen></iframe>
                            </div>
                            <h3>{tema.title}</h3>
                            <h5><b>Profesor: </b>{course.teacher}</h5>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Temary;
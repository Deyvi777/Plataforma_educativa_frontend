import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const Course = (props) => {
    const [value, setValue] = useLocalStorage("auth", null);
    const data = JSON.parse(value);

    const stars = [];
    let Score = () => {  
        for(let i=0; i<props.score; i++){
            stars.push(<i className="fa fa-star"></i>);
        }
        for(let i=0; i<5-props.score; i++){
            stars.push(<i className="fa fa-star-o"></i>);
        }
    }
    Score();

    return (
        <div className="col mb-3">
            <div className="card h-100">
                <Link to={data && data.user? props.to : "/signUp"}><img src={'https://plataforma-educativa-backend.herokuapp.com/public/'+props.image} className="card-img-top" alt="Imagen del curso"/></Link>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="row card-footer">
                    <div className="col-7"><b>Prof. </b>{props.teacher}</div>
                    <div className="col-5">{stars}</div>
                </div>
            </div>
        </div>
    );
}

export default Course;
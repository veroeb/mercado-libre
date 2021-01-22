import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-light navbar-expand-lg sticky-top" >
                <div className="container col-10">
                    <Link to="/" className="navbar-brand"><img src={process.env.PUBLIC_URL + '/Assets/Logo_ML.png'}  alt='Logo MercadoLibre' /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="input-group">
                        <input type="text" className="form-control my-auto" placeholder="Nunca dejes de buscar" />
                        <div className="input-group-append">
                            <button className="btn search-btn" type="button">
                                <img src={process.env.PUBLIC_URL + '/Assets/ic_Search.png'}  alt='Logo MercadoLibre'/>
                            </button>
                        </div>
                    </div>
                </div>
            </ nav>
        );
    }
}
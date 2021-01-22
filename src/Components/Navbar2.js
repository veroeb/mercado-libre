import React from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar row justify-content-center my-auto sticky-top">

                    <div className="col-10">
            
                        {/* <nav className="navbar navbar-light"> */}
                            {/* <InputGroup className="mb-3">
                                <Link className="navbar-brand"><img src={process.env.PUBLIC_URL + '/Assets/Logo_ML.png'}  alt='Logo MercadoLibre' /></Link>
                                <FormControl
                                    placeholder="Nunca dejes de buscar"
                                    aria-label="Nunca dejes de buscar"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary"><img src={process.env.PUBLIC_URL + '/Assets/ic_Search.png'}  alt='Logo MercadoLibre'/></Button>
                                </InputGroup.Append>
                            </InputGroup> */}
                            {/* <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><img src={process.env.PUBLIC_URL + '/Assets/ic_Search.png'}  alt='Logo MercadoLibre'/></button>
                            </form> */}

                            <Link to="/" className="navbar-brand"><img src={process.env.PUBLIC_URL + '/Assets/Logo_ML.png'}  alt='Logo MercadoLibre' /></Link>
                            <div className="input-group">
                                <input type="text" className="form-control my-auto" placeholder="Nunca dejes de buscar" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button">
                                        <img src={process.env.PUBLIC_URL + '/Assets/ic_Search.png'}  alt='Logo MercadoLibre'/>
                                    </button>
                                </div>
                            </div>
                    </div>
            </nav>
        );
    }
}
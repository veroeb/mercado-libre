import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

export default class Path extends React.Component {
    render() {
        return(
            <div className="container col-10">
                <p className="my-3">Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod Touch {'>'} <b>32 GB</b></p>
            </div>
        );
    }
}
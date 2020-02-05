import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">DnDTome</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Nav;

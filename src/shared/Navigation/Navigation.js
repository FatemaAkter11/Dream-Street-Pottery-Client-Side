import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <header className="color-bg">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5 mt-2">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                        </ul>
                        <button className="log_btn text-white fs-5 p-1 mt-2">Login</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
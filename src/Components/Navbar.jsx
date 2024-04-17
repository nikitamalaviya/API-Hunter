import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">samsung</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <Link to = {'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li clasclassNames="nav-item">
                              <Link to = {'/contact'} className="nav-link" href="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                              <Link to = {'/about us'} className="nav-link ">Anout us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
    )
}

export default Navbar
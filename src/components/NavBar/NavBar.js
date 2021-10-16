import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <div className="navbar-tabs my-1">
            <div className="nav-container">
            <ul className="container">
                        <li className="nav-flex" >
                            <NavLink to="/" className="btn btn-outline-primary">Home</NavLink> &nbsp;
                            <NavLink to="/contact" className="btn btn-outline-primary">Contact</NavLink> &nbsp;
                            <NavLink to="/about" className="btn btn-outline-primary">About</NavLink>&nbsp;
                            <NavLink to="/services" className="btn btn-outline-primary">Services</NavLink>&nbsp;
                            <NavLink to="/Testinomial" className="btn btn-outline-primary">Testinomials</NavLink>&nbsp;
                            <NavLink to="/Signup" className="btn btn-outline-primary">Sign Up</NavLink>&nbsp;
                            <NavLink to="/Login" className="btn btn-outline-primary">Login</NavLink>
                            
                        </li>
                    </ul>
                <center>
                    <NavLink className="navbar-brand navbar-logo" to="/" exact>
                        <img src="/images/ace1.png" alt="acelogo" variant="primary" height="90px" /> <br />
                       <h3 className="title"> ACE ACADEMY </h3>
                    </NavLink> </center>                    
                
                    
                </div>
            </div>

        </nav>

    )
}

export default NavBar;

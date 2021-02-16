import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NabarProps {
    
}

const Navbar: React.FC<NabarProps> = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a className="navbar-brand" href="#">CountryAPI</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">Acceuil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pays" exact className="nav-link">Pays</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;
import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';


const Navigation = () => {
    return (
        <div className="navigation">
            
            <NavLink exact to="/">
                Acceuil
            </NavLink>
            
            <NavLink exact to="/contact">
                Contact
            </NavLink>
        </div>
    );
};

export default Navigation;
// src/components/navbar.js
import React from 'react';

function Navbar({ title }) {
    return (
        <div className="navbar">
            <h1>{title}</h1>
        </div>
    );
}

export default Navbar;
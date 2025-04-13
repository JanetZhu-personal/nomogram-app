// src/components/sidebar.js
import React from 'react';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/game">Game</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
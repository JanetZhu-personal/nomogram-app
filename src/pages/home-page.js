// src/home-page.js
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import DatabaseReader from '../shared/database-reader';

function HomePage() {
    const [databaseDict, setDatabase] = useState([]);
    const handleDatabase = useCallback((data) => {
        // console.log(data);
        setDatabase(data);
    }, []);

    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate('/game');
    };
    return (
        <div>
            <Navbar title="Game Center" />
            <Sidebar />
            <DatabaseReader 
                onDataParsed={handleDatabase}/>
            <div className="content">
                <h2>Welcome to the Nomogram!</h2>
                <div className="table-container">
                    <table className="game-table">
                        <thead>
                        <tr>
                            <th>Game</th>
                            <th>Level</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Object.keys(databaseDict).map((key) => {
                                const item = databaseDict[key];
                                return (
                                <tr key={key}>
                                    <td>{item.Key}</td>
                                    <td>{item.Level}</td>
                                    <td>{item.Status}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <button id="start-btn" onClick={handleStartClick}>Start</button>
            </div>
        </div>
    );
}

export default HomePage;
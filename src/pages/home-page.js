// src/home-page.js
import React, { useState, useEffect, useCallback } from 'react';
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
    useEffect(() => {
        if (Object.keys(databaseDict).length > 0) {
            localStorage.setItem('databaseDict', JSON.stringify(databaseDict));
        }
    }, [databaseDict]);

    const [selectedGameKey, setSelectedGameKey] = useState(null);
    const handleRowClick = (key) => {
        setSelectedGameKey(key);
    };

    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate('/game/${selectedGameKey}');
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
                                const isSelected = selectedGameKey === key;
                                return (
                                    <tr 
                                        key={key} 
                                        className={isSelected ? 'selected-row' : ''}
                                        onClick={() => handleRowClick(key)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <td>{item.Key}</td>
                                        <td>{item.Level}</td>
                                        <td>{item.Status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <button
                    id="start-btn"
                    onClick={handleStartClick}
                    disabled={!selectedGameKey}
                    className={!selectedGameKey ? 'disabled-btn' : ''}
                >
                    Start
                </button>
            </div>
        </div>
    );
}

export default HomePage;
// src/home-page.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import CsvReader from '../shared/csv-reader';

function HomePage() {
    const [databaseDict, setDatabase] = useState([]);
    const handleDatabase = (data) => {
		setDatabase(data);
	};

    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate('/game');
    };
    return (
        <div>
            <Navbar title="Game Center" />
            <Sidebar />
            <CsvReader 
                filePath="/csv/puzzles.csv"
                onDataParsed={handleDatabase}
                asDict={true} />
            <div className="content">
                <h2>Welcome to the Nomogram!</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Game</th>
                        <th>Level</th>
                    </tr>
                    </thead>
                    <tbody>
                        {Object.keys(databaseDict).map((key) => {
                            const item = databaseDict[key];
                            return (
                            <tr key={key}>
                                <td>{item.Key}</td>
                                <td>{item.Level}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button id="start-btn" onClick={handleStartClick}>Start</button>
            </div>
        </div>
    );
}

export default HomePage;
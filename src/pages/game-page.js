// src/game-page.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import AnswerCard from '../components/answer-card';
import CsvReader from '../shared/csv-reader';
import GameGrid from '../components/game-grid';

function GamePage() {
	const { gameKey } = useParams();
	const databaseDict = JSON.parse(localStorage.getItem("databaseDict"));
	const answerFilePath = "/csv/answers/"+databaseDict[gameKey]?.AnswerFile;
	const [csvData, setCsvData] = useState([]);
	const handleCsvData = (data) => {
		setCsvData(data);
	};

	const [showPopup, setShowPopup] = useState(false);
	const togglePopup = () => {
		setShowPopup(prev => !prev);
	};

    return (
      	<div>
          	<Navbar title="Game" />
			<CsvReader 
                filePath={answerFilePath} 
                onDataParsed={handleCsvData}
                asDict={false} />

			<GameGrid index={gameKey} csvData={csvData}/>

			<button className="answer-popup-btn" onClick={togglePopup}>Answer</button>
			{showPopup && (
				<div className="popup-overlay">
					<div className="popup-box">
						<AnswerCard inPopup index={gameKey} csvData={csvData}/>
						<button className="answer-popup-btn" onClick={togglePopup}>Close</button>
					</div>
				</div>
			)}
		</div>
    );
}

export default GamePage;
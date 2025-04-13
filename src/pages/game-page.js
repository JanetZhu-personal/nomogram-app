// src/game-page.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import AnswerCard from '../components/answer-card';

function GamePage() {
	const { gameKey } = useParams();

	const [showPopup, setShowPopup] = useState(false);
	const togglePopup = () => {
		setShowPopup(prev => !prev);
	};

    return (
      	<div>
          	<Navbar title="Game" />
			<button className="answer-popup-btn" onClick={togglePopup}>Answer</button>
      	
			{showPopup && (
				<div className="popup-overlay">
					<div className="popup-box">
						<AnswerCard inPopup index={gameKey} />
						<button className="answer-popup-btn" onClick={togglePopup}>Close</button>
					</div>
				</div>
			)}
		</div>
    );
}

export default GamePage;
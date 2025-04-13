
// src/components/answer-card.js
import React, { useState } from 'react';
import CsvReader from '../shared/csv-reader';

function AnswerCard({ inPopup, index }) {
    const title = inPopup? "Answer of Game #"+index : null;
    const filePath = "/csv/answers/answer"+index+".csv";
    const [csvData, setCsvData] = useState([]);
    const handleCsvData = (data) => {
        console.log(data);
		setCsvData(data);
	};
    return (
        <div className="content">
            {title && <h3>{title}</h3>}
            <CsvReader 
                filePath={filePath} 
                onDataParsed={handleCsvData} />
            <div>
				<table className="answer-grid">
                    <tbody>
                        {csvData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`answer-grid-cell ${cell === "1" ? "black-cell" : "white-cell"}`}
                                />
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
			</div>
        </div>
    );
}

export default AnswerCard;
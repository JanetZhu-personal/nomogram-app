
// src/components/answer-card.js
import React from 'react';

function AnswerCard({ inPopup, index, csvData }) {
    const title = inPopup? "Answer of Game #"+index : null;
    return (
        <div className="content">
            {title && <h3>{title}</h3>}
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
    );
}

export default AnswerCard;
// src/components/game-grid.js
import React, { useState } from 'react';
import CalculateHints from '../shared/calculate-hints'

function GameGrid({ index, csvData }) {
    const [hints, setHits] = useState(null);

    return (
        <div className="grid-container">
            <CalculateHints csvData={csvData} onDataParsed={setHits} />
            
            {hints && (
                <table className="grid">
                    <thead>
                        <tr>
                            {/* Empty cell at the top-left corner */}
                            <th className="empty-cell"></th>
                            
                            {/* Column hints */}
                            {hints.ColumnHints.map((colHint, colIndex) => (
                                <th key={colIndex} className="hint">
                                    {colHint.length === 1 ? colHint[0] : colHint.join(", ")}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {/* Rows */}
                        {csvData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* Row hint - with a separate background color */}
                                <td className="row-hint">
                                    {hints.RowHints[rowIndex].length === 1 
                                        ? hints.RowHints[rowIndex][0]
                                        : hints.RowHints[rowIndex].join(", ")}
                                </td>
                                
                                {/* Cells */}
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="cell"></td> // Empty cell for now
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default GameGrid;
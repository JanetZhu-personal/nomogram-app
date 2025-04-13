// src/components/game-grid.js
import React, { useState } from 'react';
import CalculateHints from '../shared/calculate-hints'

function GameGrid({ index, csvData }) {
    const [hints, setHints] = useState(null);

    return (
        <div className="grid-container">
            <CalculateHints csvData={csvData} onDataParsed={setHints} />

            {hints && (
                <div className="grid">
                    {/* Column hints (above the grid) */}
                    <div className="column-hints">
                        <div className="empty-cell"></div> {/* Empty cell at the top-left corner */}
                        {hints.ColumnHints.map((colHint, colIndex) => (
                            <div key={colIndex} className="hint">
                                {colHint.length === 1 ? colHint[0] : colHint.join(", ")}
                            </div>
                        ))}
                    </div>

                    {/* Grid content (with row hints on the left) */}
                    <div className="grid-content">
                        {csvData.map((row, rowIndex) => (
                            <div key={rowIndex} className="row">
                                {/* Row hint (on the left of each row) */}
                                <div className="row-hint">
                                    {hints.RowHints[rowIndex].length === 1
                                        ? hints.RowHints[rowIndex][0]
                                        : hints.RowHints[rowIndex].join(", ")}
                                </div>

                                {/* Empty grid cells */}
                                {row.map((cell, cellIndex) => (
                                    <div key={cellIndex} className="cell"></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameGrid;
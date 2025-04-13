// src/shared/game-grid.js
import { useEffect } from 'react';

function CalculateHints({ csvData, onDataParsed }) {
    useEffect(() => {
        if (csvData && csvData.length > 0 && csvData[0].length > 0) {
            const rowHints = csvData.map(getHint);

            const columnHints = csvData[0].map((_, colIndex) => {
                const col = csvData.map(row => row[colIndex]);
                return getHint(col);
            });

            onDataParsed({ RowHints: rowHints, ColumnHints: columnHints });
        }
    }, [csvData, onDataParsed]);

    return null;
}

function getHint(line) {
    const hints = [];
    let count = 0;
    for (let cell of line) {
        if (cell === "1") {
            count++;
        } else {
            if (count > 0) {
                hints.push(count);
                count = 0;
            }
        }
    }
    if (count > 0) hints.push(count); // trailing block
    return hints.length > 0 ? hints : [0];
}

export default CalculateHints;
// src/shared/database-reader.js
import { useState, useEffect } from 'react';
import CsvReader from './csv-reader';

function DatabaseReader({ onDataParsed }) {
    // paths
    const puzzleFile = '/csv/puzzles.csv';
    const userHistoryFile = 'csv/users/user01/history.csv';
    // get data
    const [puzzleData, setPuzzleData] = useState([]);
    const handlePuzzleData = (data) => {
        setPuzzleData(data);
    };
    const [userHistoryData, setUserHistoryData] = useState([]);
    const handleUserHistoryData = (data) => {
        setUserHistoryData(data);
    };

    // Calculation
    useEffect(() => {
        if (puzzleData && userHistoryData) {
            const result = calculateHistory(puzzleData, userHistoryData);

            if (onDataParsed) {
                onDataParsed(result);
            }
        }
    }, [puzzleData, userHistoryData, onDataParsed]);

    return (
        <div>
            <CsvReader 
                filePath={puzzleFile}
                onDataParsed={handlePuzzleData}
                asDict={true} />
            <CsvReader 
                filePath={userHistoryFile}
                onDataParsed={handleUserHistoryData}
                asDict={true} />
        </div>
    );
}

function calculateHistory(puzzles, history) {
    const result = {};

    for (const puzzleKey in puzzles) {
        result[puzzleKey] = {
            ...puzzles[puzzleKey],
            Activities: {},
            CompletedCount: 0,
            Status: "New"  // Default status
        };
    }

    for (const activityKey in history) {
        const activity = history[activityKey];
        const gameKey = activity.GameKey;

        if (result[gameKey]) {
            // Activities
            result[gameKey].Activities[activityKey] = activity;
            // CompletedCount
            if (activity.IsCompleted === "1") {
                result[gameKey].CompletedCount += 1;
            }
        }
    }

    // Status
    for (const puzzleKey in result) {
        const puzzle = result[puzzleKey];
        const activityCount = Object.keys(puzzle.Activities).length;

        if (activityCount === 0) {
            puzzle.Status = "New";
        } else if (puzzle.CompletedCount > 0) {
            puzzle.Status = "Completed";
        } else {
            puzzle.Status = "Uncompleted";
        }
    }

    return result;
}


export default DatabaseReader;
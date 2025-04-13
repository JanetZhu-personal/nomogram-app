// src/shared/csv-reader.js
import React, { useEffect } from 'react';
import Papa from 'papaparse';

function CsvReader({ filePath, onDataParsed }) {

    useEffect(() => {
        // Fetch the CSV file from the public directory
        Papa.parse(filePath, {
            download: true,
            complete: (result) => {
                if (onDataParsed) onDataParsed(result.data);
            },
        });
    }, [filePath, onDataParsed]);
}

export default CsvReader;
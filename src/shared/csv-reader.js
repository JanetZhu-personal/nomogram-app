// src/shared/csv-reader.js
import { useEffect } from 'react';
import Papa from 'papaparse';

function CsvReader({ filePath, onDataParsed, asDict = false }) {
    useEffect(() => {
        Papa.parse(filePath, {
            download: true,
            header: asDict, // <-- this is the fix
            skipEmptyLines: true,
            complete: (result) => {
                let parsedData = result.data;

                if (asDict && parsedData.length > 0) {
                    const keyField = Object.keys(parsedData[0])[0]; // Use the first column as key
                    const dictData = {};

                    parsedData.forEach(row => {
                        const key = row[keyField];
                        if (key !== undefined && key !== null && key !== '') {
                            dictData[key] = row;
                        }
                    });

                    parsedData = dictData;
                }

                if (onDataParsed) onDataParsed(parsedData);
            },
        });
    }, [filePath, onDataParsed, asDict]);

    return null;
}

export default CsvReader;
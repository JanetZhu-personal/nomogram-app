// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes'; // Import the routes from Routes.js

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppRoutes /> {/* Render routes here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
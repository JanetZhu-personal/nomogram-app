// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import GamePage from '../pages/game-page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game/:gameKey" element={<GamePage />} />
    </Routes>
  );
};

export default AppRoutes;
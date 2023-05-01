import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000")

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home/*' element={<HomePage />} />
      <Route path='/*' element={<h1>404 Page not found</h1>} />
    </Routes>
  )
}

export default App
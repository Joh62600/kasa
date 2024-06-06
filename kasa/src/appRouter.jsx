import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/FicheLogement/:id" element={<FicheLogement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
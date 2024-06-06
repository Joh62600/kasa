import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderC from './components/HeaderC/HeaderC';
import FooterC from './components/FooterC/FooterC';
import AppRouter from './appRouter'; // 

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderC />
        <AppRouter /> {}
        <FooterC />
      </div>
    </Router>
  );
}

export default App;
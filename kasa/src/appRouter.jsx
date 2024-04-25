import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/FicheLogement" element= {<FicheLogement/>}/>
          <Route path="*" element= {<NotFound/>}/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
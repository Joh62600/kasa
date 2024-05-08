import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';
import HeaderC from './components/HeaderC/HeaderC';
import FooterC from './components/FooterC/FooterC';
 

function App() {
  return (
    <Router>
      <div>
        <HeaderC/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/FicheLogement/:id" element= {<FicheLogement/>}/>
          <Route path="*" element= {<NotFound/>}/>  
        </Routes>
        <FooterC/>
      </div>
    </Router>
    
  );
}

export default App;
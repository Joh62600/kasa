import React from 'react';
import AppRouter from './AppRouter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



import './App.css';



function App() {
  return (
    <div>
    <div className="App">
      <Header />
      <Footer />
      <AppRouter/>
      </div>
  </div>
  );
}

export default App;

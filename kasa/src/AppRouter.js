import React from "react";
import { BrowserRouter , Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/header/Header";

function AppRouter() {
  return (
    // <Router>
    <React.StrictMode>
      <BrowserRouter basename="/">
      <Header/>
      <Routes>
      {/* <Navigation /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Fiche-logement" element={<FicheLogement />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </React.StrictMode>
    // </Router>
  );
}

export default AppRouter;
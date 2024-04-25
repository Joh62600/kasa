import React from 'react';
import {  NavLink} from 'react-router-dom';
import './HeaderC.css'


function HeaderC() {
  return<header id='Dispo'>
        <img src='./logo.png'></img>
      <div id='NavBar'>
      <NavLink to='/'>Accueil</NavLink>
      <NavLink to='/About'>A propos</NavLink>
      
      
      </div>
    </header>
  
}

export default HeaderC;
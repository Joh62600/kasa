import React from 'react';
import {  NavLink} from 'react-router-dom';
import './HeaderC.css'



function HeaderC() {
  return(
      
  <header id='Dispo'>
  <NavLink to='/'>
      <img id='logo' src='./logo.png' alt='logoHeader'></img>
      </NavLink>
      <nav id='NavBar'>
        <ul>
      <li><NavLink to='/'>Accueil</NavLink></li>
      <li><NavLink to='/About'>A propos</NavLink></li>
      </ul>
      
      </nav>
    </header>
    
  )
}

export default HeaderC;
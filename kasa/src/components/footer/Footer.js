import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer id='dispo'>
      <div id='ensembleDispo'>
      <img id='logoFooterSize' src='./LogoFooter.png'></img>
        <div >
      <p>© 2020 Kasa. All rights reserved </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
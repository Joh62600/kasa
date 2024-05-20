import React from "react";
import { Link } from 'react-router-dom';
import './banner.css'

function Banner({image, overlayText, dark }) {
    return (
        <div id="BannerDispo">
     <img className="ImgBanner" src={image} style={{ filter : dark ? 'brightness (40%)': 'none'}} ></img>
     <h2 className="OverlayImg">{overlayText}</h2>
     </div>
    );
  }

  export default Banner;
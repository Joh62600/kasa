import React from "react";
import { NavLink } from "react-router-dom";
import  '../components/StylePage/NotFoundStyle.css'


function NotFound() {
    return (
      <div id="NotFoundDispo" >
    <p id="ModifyFont404">404</p>
    <p id="MsgErreur">Oups! La page que vous demandez n'existe pas.</p>
    <NavLink id="Back" to={"/"}>Retourner sur la page d'accueil</NavLink>
    </div>
    )
  }
  
  export default NotFound;
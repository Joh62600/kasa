import React from "react";
import Banner from "../components/banner/banner";
import CardList from "../components/CardList/CardList";



function Home() {
    return (
      <div>
      <Banner image="ImageBanner1.png" overlayText="Chez vous,partout et ailleurs" dark= {true}/>
      <CardList/>
      </div>
    );
  }

  export default Home;
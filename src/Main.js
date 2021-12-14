import React from "react";
import Hero from "./components/Hero";
import AnimalCard from "./components/custom/AnimalCard";
import BrowseByPet from "./components/BrowseByPet";

const Main = (props) => {
  const {data} = props
  
  return (
    
    <>
      <Hero />
      
      <BrowseByPet data={data} />
      <AnimalCard />
    </>
  );
};

export default Main;

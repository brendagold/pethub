import React from "react";
import Hero from "./components/Hero";
import BrowseByPet from "./components/BrowseByPet";

const Main = (props) => {
  const {data} = props
  
  return (
    
    <>
      <Hero />
      <BrowseByPet data={data} />
      
    </>
  );
};

export default Main;

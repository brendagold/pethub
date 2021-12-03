import React from "react";
import Hero from "./components/Hero";
import AnimalCard from "./components/custom/AnimalCard";
import BrowseByPet from "./components/BrowseByPet";

const Main = () => {
  return (
    <>
      <Hero />
      <BrowseByPet />
      <AnimalCard />
    </>
  );
};

export default Main;

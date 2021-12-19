import React, { useState } from "react";
import AnimalCard from "./custom/AnimalCard";

const FilterSearch = () => {
 

  
  const classes = useStyles();
  return (
    <div className={classes.animalContainer}>
      {pets.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          city={animal.city}
          breed={animal.breed}
          images={animal.images}
          state={animal.state}
          id={animal.id}
          animal={animal.animal}
        />
      ))}
    </div>
  );
};

export default FilterSearch;

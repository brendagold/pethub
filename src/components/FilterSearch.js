import React, { useState } from "react";
import AnimalCard from "./custom/AnimalCard";

const FilterSearch = () => {
  const [pets, setPets] = useState([]);
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const FetchPets = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}`
      );
      const data = await response.json();
      setPets(data.pets);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(
    () => {
      window.scroll(0, 0);
      FetchPets();
    },
    // eslint-disable-next-line
    [animal]
  );
  //const { data } = props;
  console.log(pets);
  console.log(animal);
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

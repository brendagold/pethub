import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Stack } from "@mui/material";
import sizes from "./sizes";
import AnimalCard from "./custom/AnimalCard";

const useStyles = makeStyles((theme) => ({
  btn: {
    border: "none",
    backgroundColor: "#F0F6FF",
    height: "85px",
    width: "85px",
    borderRadius: "8px",

    [sizes.down("sm")]: {
      height: "80px",
      width: "100%",
      flexWrap: "wrap",
    },
  },
  container: {
    marginLeft: "60px",
    [sizes.down("sm")]: {
      marginLeft: "10px",
    },
  },
  btnContent: {
    display: "block",
  },
  btnName: {
    display: "block",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "18px",
    color: "#5F6472",
    lineHeight: "23px",
    [sizes.down("sm")]: {
      fontSize: "15px",
    },
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "44px",
    color: "#666879",
  },
  animalContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    gap: "25px",
  },
}));

const BrowseByPet = (props) => {
  const [pets, setPets] = useState([]);
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false)

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
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Browse Through Pet Types</h3>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <button className={classes.btn} onClick={() => setAnimal("dog")}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/dog.png"}`}
              alt="dog"
            />
            <span className={classes.btnName}>Dogs</span>
          </span>
        </button>
        <button className={classes.btn} onClick={() => setAnimal("cat")}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/cat.png"}`}
              alt="cat"
            />
            <span className={classes.btnName}>Cats</span>
          </span>
        </button>
        <button className={classes.btn} onClick={() => setAnimal("bird")}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/bird.png"}`}
              alt="bird"
            />
            <span className={classes.btnName}>Birds</span>
          </span>
        </button>
        <button className={classes.btn} onClick={() => setAnimal("rabbit")}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/rabbit.png"}`}
              alt="rabbit"
            />
            <span className={classes.btnName}>Rabbits</span>
          </span>
        </button>
        <button className={classes.btn} onClick={() => setAnimal("reptile")}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/reptile.png"}`}
              alt="reptile"
            />
            <span className={classes.btnName}>Reptiles</span>
          </span>
        </button>
      </Stack>
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
    </div>
  );
};

export default BrowseByPet;

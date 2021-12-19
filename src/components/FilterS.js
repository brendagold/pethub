import React, { useState, useEffect } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@mui/material";
import Chips from "./custom/Chip";
import sizes from "./sizes";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#0D75FF",
    height: "50px",
    width: "70px",
    borderRadius: "100px",
    outline: "none",
    border: "none",
    padding: "7px 10px",
    display: "flex",
    margin: "0",
    justifyContent: "center",
    [sizes.down("sm")]: {
      padding: "3px 5px",
      width: "90%",
      height: "auto",
      marginTop: "10px",
      marginRight: "20px"
    },
  },

  paper: {
    padding: "30px",
    width: "60%",
    position: "relative",
    left: "46px",
    bottom: "200px",
    [sizes.down("sm")]: {
      width: "100%",
      left: 0,
      padding: "10px 5px",
      top: "0px",
    },
    [sizes.down("md")]: {
      width: "90%",
      left: "25px",
      padding: "10px 5px",
      
    },
  },
  filterText: {
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Work Sans",
    fontStyle: "normal",
    marginTop: "20px",
    marginLeft: "10px",
    marginBottom: "15px",
    lineHeight: "10px",
    color: "#58667E",
  },

  filterContainer: {
    backgroundColor: "#F8FAFD",
    width: "100%",
    height: "50px",
    padding: "10px 20px",
    borderRadius: "100px",
    display: "flex",
    paddingRight: 0,
    justifyContent: "space-between",
    alignItems: "center",
    [sizes.down("sm")]: {
      height: "100%",
      borderRadius: "10px",
      flexDirection: "column",
    },
  },

  selectContainer: {
    border: "none",
    backgroundColor: "#F8FAFD",
    outline: "none",
    color: "#8588A3",
    display: "inline-flex",
    marginLeft: "5px",
    
  },
  inputContainer: {
    display: "inline-flex",
    [sizes.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginTop: "6px"
    },
  },
  selectSingle: {
    marginLeft: "30px",
    [sizes.down("sm")]: {
      marginTop: "10px",
      marginLeft: 0,
    },
  },

  searchBtn: {
    fontSize: 50,
    color: "#fff",
    [sizes.down("sm")]: {
      fontSize: 25
    },
  },
}));

const locations = ["Seattle, WA", "San Francisco, CA", "Minneapolis, MN", "Denver, CO", "Carol Stream, IL", "Bridgeport, CT",  "Charlotte, NC", "Springfield, IL", "Tucson, AZ"];
const animals = ["Dog", "Cat", "Rabbit", "Bird", "Reptile"];

export default function FilterS() {
  const classes = useStyles();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  //const [breed, setBreed] = useState("");

  const handleChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const FetchPets = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${selectedAnimal}&location=${selectedLocation}`
      );
      const data = await response.json();
      setPets(data.pets);
      setLoading(false);
      console.log(pets)
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = () => {
    
    FetchPets()
  }
  // useEffect(
  //   () => {
  //     window.scroll(0, 0);
  //     FetchPets();
  //   },
  //   // eslint-disable-next-line
  //   []
  // );
  //const { data } = props;
  
  return (
    <div className={classes.container}>
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.filterContainer}>
          <div className={classes.inputContainer}>
            <div>
              <img
                alt="location"
                src={`${process.env.PUBLIC_URL + "/location.svg"}`}
              />
              <select
                className={classes.selectContainer}
                onChange={handleChangeLocation}
                name="location"
                id="location"
                value={selectedLocation}
              >
                <option>All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.selectSingle}>
              <img
                alt="animal"
                src={`${process.env.PUBLIC_URL + "/animal.svg"}`}
              />
              <select
                className={classes.selectContainer}
                name="animal"
                id="animal"
                value={selectedAnimal}
                onChange={handleChange}
              >
                <option>All animals</option>
                {animals.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.selectSingle}>
              <img
                alt="breed"
                src={`${process.env.PUBLIC_URL + "/breed.svg"}`}
              />
              <select
                className={classes.selectContainer}
                name="breed"
                id="breed"
              >
                <option>All breeds</option>
              </select>
            </div>
          </div>
          <button type="submit" onClick={handleClick } className={classes.button}>
            <SearchIcon className={classes.searchBtn} />
          </button>
        </div>
        <Typography variant="h6" className={classes.filterText}>
          You may be looking for
        </Typography>
        <Chips />
      </Paper>
    </div>
  );
}

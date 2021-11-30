import * as React from "react";
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
    fontSize: 40,
    color: "#fff",
    [sizes.down("sm")]: {
      fontSize: 25
    },
  },
}));

const locations = ["Lagos", "Calabar", "Abuja", "Rivers", "Enugu"];
const animals = ["Dog", "Cat", "Rabbit", "bird"];

export default function FilterS() {
  const classes = useStyles();
  const [animal, setAnimal] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [breed, setBreed] = React.useState("");

  const handleChange = (event) => {
    setBreed(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

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
          <button type="submit" className={classes.button}>
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

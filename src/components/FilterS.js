import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Paper, Typography } from "@mui/material";
import Chips from "./custom/Chip";

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
  },

  paper: {
    padding: "30px",
    width: "60%",
    position: "relative",
    left: "46px",
    bottom: "200px",
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
  },
  selectSingle: {
    marginLeft: "30px",
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
            <SearchIcon sx={{ fontSize: 40, color: "#fff" }} />
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

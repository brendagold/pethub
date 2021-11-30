import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  btn: {
    border: "none",
    backgroundColor: "#F0F6FF",
    height: "85px",
    width: "85px",
    borderRadius: "8px",
  },
  container: {
    marginLeft: "60px",
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
    lineHeight: "23px"
    
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "44px",
    color: "#666879",
  }
}));

const BrowseByPet = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Browse Through Pet Types</h3>
      <Stack direction="row" spacing={2}>
        <button className={classes.btn}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/dog.png"}`}
              alt="dog"
            />
            <span className={classes.btnName}>Dogs</span>
          </span>
        </button>
        <button className={classes.btn}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/cat.png"}`}
              alt="cat"
            />
            <span className={classes.btnName}>Cats</span>
          </span>
        </button>
        <button className={classes.btn}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/bird.png"}`}
              alt="bird"
            />
            <span className={classes.btnName}>Birds</span>
          </span>
        </button>
        <button className={classes.btn}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/rabbit.png"}`}
              alt="rabbit"
            />
            <span className={classes.btnName}>Rabbits</span>
          </span>
        </button>
        <button className={classes.btn}>
          <span className={classes.btnContent}>
            <img
              src={`${process.env.PUBLIC_URL + "/vector/reptile.png"}`}
              alt="reptile"
            />
            <span className={classes.btnName}>Reptiles</span>
          </span>
        </button>
      </Stack>
    </div>
  );
};

export default BrowseByPet;

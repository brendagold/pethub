import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Paper } from "@mui/material";
import Filter from "./filter";
import FilterS from "./FilterS";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#F3F8FF",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  petContainer: {
    width: "80%",
    
    

  },

  tlCorner: {
    borderTopLeftRadius: "80px",
  },
  brCorner: {
    borderBottomRightRadius: "80px",
  },
  titleStyles: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "48px",
    marginTop: 0,
    marginBottom: 0,
    lineHeight: "59px"
  },
  title: {
    color: "#344062",
  },
  intro: {
    fontFamily: "Inter",
    fontStyle: "normal",
    color: "#344062",
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#0D75FF",
    margin: 0,
  },
  subTitle: {
    color: "#D21A30"
  },
  para: {
    fontFamily: "Inter",
    fontStyle: "normal",
    color: "#344062",
    fontSize: "18px",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container justify="center" sx={{ padding: "70px 50px" }}>
        <Grid item md={6}>
          <h4 className={classes.intro}>find special pets</h4>
          <p className={clsx(classes.title, classes.titleStyles)}>Think you Love Pets?</p>
          <p className={clsx(classes.subTitle, classes.titleStyles)}>Adopt One</p>
          <p className={classes.para}>
            Pet Adoption is quickly becomingthe preferred way to find a new dog,
            puppy, cat or kitten
          </p>
        </Grid>
        <Grid item md={6} justify="center">
          <div className={classes.petContainer}>
            <Grid
              container
              item
              spacing={0}
              justify="center"
            >
              <Grid item xs={6} align="center">
                <img
                  className={clsx(classes.image, classes.tlCorner)}
                  src={
                    "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA0fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  }
                  alt="Cat"
                />
              </Grid>
              <Grid item xs={6} align="center">
                <img
                  className={classes.image}
                  src={
                    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  }
                  alt="Dog"
                />
              </Grid>
            </Grid>
            <Grid container item spacing={0} justify="center" sx={{ marginTop: "-1px" }}>
              <Grid item xs={6} align="center">
                <img
                  className={classes.image}
                  src={
                    "https://images.unsplash.com/photo-1548439739-0cf616cef1cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxkb2d8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  }
                  alt="Dog"
                />
              </Grid>
              <Grid item xs={6} align="center">
                <img
                  className={clsx(classes.image, classes.brCorner)}
                  src={
                    "https://images.unsplash.com/photo-1597926661974-69a26ffa0f08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJpcmR8ZW58MHx8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  }
                  alt="Bird"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <FilterS />
    </div>
  );
};

export default Hero;

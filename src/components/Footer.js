import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { blue } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import sizes from "./sizes";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#E5E5E5",
    height: "650px",
    [sizes.down("sm")]: {
      
    },
  },
  circle1: {
    position: "relative",
    [sizes.down("sm")]: {
      top: "-20px",
      left: "-90px",
    },
  },
  fan: {
    position: "relative",
    top: "200px",
    left: "-50px",
    [sizes.down("md")]: {
      top: "290px",
      left: "-130px",
    },
    [sizes.down("sm")]: {
      top: "70px",
      left: "-100px",
    },
  },
  kite: {
    position: "relative",
    right: "-38%",
    top: "-19%",
    [sizes.down("md")]: {
      right: "-78%",
      top: "-30%",
    },
    [sizes.down("sm")]: {
      right: "-60%",
      top: "-94%",
    },
  },
  circle2: {
    position: "relative",
    right: "-48%",
    top: "30%",
    [sizes.down("md")]: {
      right: "-20%",
      top: "40%",
    },
    [sizes.down("sm")]: {
      right: "-55%",
      top: "-20%",
    },
  },
  footerContent: {
    [sizes.down("md")]: {
      position: "relative",
      right: "-5%",
      top: "-23%",
    },
    [sizes.down("sm")]: {
      position: "relative",
      right: "-5%",
      top: "-85%",
    },
  },
  footerCTA: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    marginTop: 0,
    marginBottom: 0,
    textAlign: "center",
    [sizes.down("sm")]: {
      fontSize: "30px",
    },
  },
  footSpan: {
    color: "#0D75FF",
  },
  btn: {
    borderRadius: "100px",
    backgroundColor: "#0D75FF",
    textTransform: "none",
    marginTop: "10px",
    left: "36%",
    [sizes.down("md")]: {
      left: "26%",
    },
    [sizes.down("sm")]: {
      left: "45px",
    },
  },
  socials: {
    marginRight: "30%",
    [sizes.down("md")]: {
      marginRight: "10%",
     
    },
    [sizes.down("sm")]: {
      marginRight: "5%",
    },
  },
  footerAvatar: {
    backgroundColor: "#0D75FF !important",
    marginRight: "10px",
    marginLeft: "35px",
    width: 50,
    height: 50,
    [sizes.down("sm")]: {
      marginLeft: "0px",
    },
  },
  absolute: {
    textAlign: "center",
    marginTop: "25px",
    [sizes.down("sm")]: {
      margin: "0",
      padding: "2px",
    },
  },
  footerToolbar: {
    marginTop: "50px",
    [sizes.down("sm")]: {
      marginTop: "10px",
      flexDirection: "column",
     

    },
  },
  footerInfo: {
    [sizes.down("sm")]: {
      position: "relative",
      top: "-55%"
    },
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <img
        className={classes.circle1}
        alt="dog"
        src={`${process.env.PUBLIC_URL + "/footer/circle.png"}`}
      />
      <img
        className={classes.fan}
        alt="dog"
        src={`${process.env.PUBLIC_URL + "/footer/fan.png"}`}
      />
      <img
        className={classes.circle2}
        alt="dog"
        src={`${process.env.PUBLIC_URL + "/footer/circle.png"}`}
      />
      <img
        className={classes.kite}
        alt="dog"
        src={`${process.env.PUBLIC_URL + "/footer/kite.png"}`}
      />

      <div className={classes.footerContent}>
        <p className={classes.footerCTA}>
          <span className={classes.footSpan}>Need </span> help with
        </p>
        <p className={classes.footerCTA}> Adopting a pet? </p>
        <Button variant="contained" color="primary" className={classes.btn}>
          View all pets
        </Button>
      </div>

      <div className={classes.footerInfo}>

      <Toolbar className={classes.footerToolbar}>
        <Avatar className={classes.footerAvatar}>
          <img
            alt="Pet Logo"
            src={`${process.env.PUBLIC_URL + "/petlogo.png"}`}
          />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pethub
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          className={classes.socials}
        >
          <IconButton color="primary" aria-label="Facebook" component="span">
            <FacebookOutlinedIcon color="action" />
          </IconButton>
          <IconButton color="primary" aria-label="Instagram" component="span">
            <InstagramIcon color="action" />
          </IconButton>
          <IconButton color="primary" aria-label="Twitter" component="span">
            <TwitterIcon color="action" />
          </IconButton>
          <IconButton color="primary" aria-label="Linkedin" component="span">
            <LinkedInIcon color="action" />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={3}>
          <Link href="#" underline="none">
            Term of Use
          </Link>
          <Link href="#" underline="none">
            Privacy Policy
          </Link>
        </Stack>
      </Toolbar>

      <Typography className={classes.absolute}>
        Copyright © 2021 Petly. All rights reserved.
      </Typography>
      </div>
    </div>
  );
};

export default Footer;

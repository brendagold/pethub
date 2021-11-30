import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { blue } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#E5E5E5",
    height: "600px",
  },
  circle1: {
    position: "relative",
  },
  fan: {
    position: "relative",
    top: "200px",
    left: "-50px",
  },
  kite: {
    position: "relative",
    right: "-38%",
    top: "-19%",
  },
  circle2: {
    position: "relative",
    right: "-48%",
    top: "30%",
  },
  //   footerContent: {
  //     textAlign: "center",
  //   },
  footerCTA: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    marginTop: 0,
    marginBottom: 0,
    textAlign: "center",
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
  },
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

      <Toolbar sx={{ marginTop: "50px" }}>
        <Avatar
          sx={{
            bgcolor: blue[700],
            marginRight: "10px",
            marginLeft: "35px",
            width: 50,
            height: 50,
          }}
        >
          <img
            alt="Pet Logo"
            src={`${process.env.PUBLIC_URL + "/petlogo.png"}`}
          />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pethub
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2} sx={{marginRight: "30%"}}>
          <IconButton
            color="primary"
            aria-label="Facebook"
            component="span"
          >
            <FacebookOutlinedIcon color="action" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Instagram"
            component="span"
          >
            <InstagramIcon color="action" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Twitter"
            component="span"
          >
            <TwitterIcon color="action" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Linkedin"
            component="span"
          >
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

      <Typography sx={{textAlign: "center", marginTop: "25px"}}>Copyright © 2021 Petly. All rights reserved.</Typography>
    </div>
  );
};

export default Footer;

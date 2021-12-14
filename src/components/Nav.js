import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@mui/material/colors";
import AppBarCollapse from "./AppBarCollapse";
import sizes from "./sizes";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {},
  avatar: {
    backgroundColor: "#0D75FF !important",
    marginRight: "10px",
    marginLeft: "35px",
    width: 50,
    height: 50,
    [sizes.down("sm")]: {
      marginLeft: "0px",
    },
  },
  midStack: {
    marginLeft: "30%", 
    border: "1px solid #f2f2f2", 
    borderRadius: "8px",
    [sizes.down("md")]: {
      marginLeft: "10%",
    },
    [sizes.down("sm")]: {
      display: "none !important",
    },
  },
  linkStack: {
    [sizes.down("sm")]: {
      display: "none !important",
    },
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.navigation} elevation={0} color="transparent">
        <Toolbar>
          <Avatar
            className={classes.avatar}
          >
            <img
              alt="Pet Logo"
              src={`${process.env.PUBLIC_URL + "/petlogo.png"}`}
            />
          </Avatar>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1, }}>
           <Link href="/" sx={{textDecoration: "none", color: "black"}}>Pethub</Link> 
          </Typography>

          <AppBarCollapse />

          <Stack direction="row" alignItems="center" spacing={3} className={classes.linkStack}>
            <Link href="#" underline="none">
              Find a pet to Adopt
            </Link>
            <Link href="#" underline="none">
              Report a missing pet
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" className={classes.midStack} spacing={2}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={`${process.env.PUBLIC_URL + "/sun.svg"}`} alt="sun" />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img src={`${process.env.PUBLIC_URL + "/moon.svg"}`} alt="moon" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default withStyles(styles)(Nav)
import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
    padding: "10px",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        spacing={3}
      >
        <Link href="#" underline="none">
          Find a pet to Adopt
        </Link>
        <Link href="#" underline="none" >
          Report a missing pet
        </Link>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{ marginTop: "15px",border: "1px solid #f2f2f2", borderRadius: "8px" }}
        spacing={2}
      >
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
    </ButtonAppBarCollapse>
    {/* <div className={props.classes.buttonBar} id="appbar-collapse">
      <Stack direction="row" alignItems="center" spacing={3}>
        <Link href="#" underline="none">
          Find a pet to Adopt
        </Link>
        <Link href="#" underline="none">
          Report a missing pet
        </Link>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          marginLeft: "30%",
          border: "1px solid #f2f2f2",
          borderRadius: "8px",
        }}
        spacing={2}
      >
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
    </div> */}
  </div>
);

export default withStyles(styles)(AppBarCollapse);

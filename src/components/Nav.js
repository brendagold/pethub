import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import { blue } from "@mui/material/colors";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
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

          <Stack direction="row" alignItems="center" spacing={3}>
            <Link href="#" underline="none">
              Find a pet to Adopt
            </Link>
            <Link href="#" underline="none">
              Report a missing pet
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" sx={{marginLeft: "30%", border: "1px solid #f2f2f2", borderRadius: "8px"}} spacing={2}>
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

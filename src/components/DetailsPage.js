import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  animalTitle: {
    fontFamily: "Work Sans",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "30px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    marginTop: "5px",
  },

  animalBreed: {
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Work Sans",
    fontStyle: "normal",
    lineHeight: "21px",
    letterSpacing: "-0.02em",
  },
  icon: {
    position: "relative",
    left: "90%",
    top: "-40px",
  },
  btn: {
    borderRadius: "100px",
    backgroundColor: "#0D75FF",
    textTransform: "capitalize",
    padding: "20px 50px"
  },
  
}));

const DetailsPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Card sx={{ maxWidth: 1000, padding: "25px" }}>
        <CardHeader
          avatar={<Avatar aria-label="luna">L</Avatar>}
          action={
            <img
            className={classes.icon}
            alt="dog"
            src={`${process.env.PUBLIC_URL + "/vector/dog.png"}`}
          />
            // <IconButton aria-label="settings">
            //   <MoreVertIcon />
            // </IconButton>
          }
          title="Luna"
          subheader="Havenese"
        />
        <CardMedia
          component="img"
          height="400"
          image={`${process.env.PUBLIC_URL + "/puppy.jpg"}`}
          alt="animal"
          sx={{ borderRadius: "6px" }}
        />
        <CardContent>
        <Typography className={classes.animalTitle} variant="h6">Description</Typography>
        <Typography  variant="body2">
            Luna Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum sit provident maiores dolor laudantium amet quas, modi
            aut officia similique eaque praesentium, recusandae iste
            consequuntur!
          </Typography>

          
          
        </CardContent>

        <CardActions
          sx={{ justifyContent: "space-between", marginTop: "-40px" }}
        >
          <Button variant="contained" className={classes.btn}>
            Adopt Luna
          </Button>
          <IconButton
            aria-label="location"
            sx={{
              cursor: "default",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
            }}
          >
            <Typography variant="body2">
              <LocationOnOutlinedIcon
                style={{ position: "relative", top: "5px" }}
              />
              Seattle, WA
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default DetailsPage;

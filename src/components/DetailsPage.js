import React, { useState, useEffect } from "react";
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
import { Button, Stack } from "@mui/material";
import Popup from "./custom/Popup";
import { useParams } from "react-router-dom";
import Notification from "./Notification";


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
    color: "#58667E",
  },

  animalBreed: {
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Work Sans",
    fontStyle: "normal",
    lineHeight: "21px",
    letterSpacing: "-0.02em",
    color: "#58667E",
  },
  icon: {
    position: "relative",
    left: "30%",
    top: "-5%",
  },
  btn: {
    borderRadius: "100px !important",
    backgroundColor: "#0D75FF",
    textTransform: "capitalize",
    padding: "20px 50px",
    marginTop: "25px !important",
  },
  imgStack: {
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    margin: "20px auto",
    width: "100%",
  },
  image: {
    width: "90%",
  },
  card: {
    maxWidth: 700,
    padding: "25px",
    margin: "100px auto",
    backgroundColor: "#F3F8FF",
  },
  cardContent: {
    backgroundColor: "#fff",
    padding: "10px",
  },
}));

const DetailsPage = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const { id } = useParams();
  const [pet, setPet] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchPetById = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?id=${id}`
      );
      const data = await response.json();
      setPet(data.pets);
      setLoading(false);
      console.log(pet);
    } catch (error) {
      console.error(error.message);
    }
  };
  //  const handleClick= () => {
  //    fetchPetById()
  //  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchPetById();
  }, []);

  const petIcon = (name) => {
    if (name == "dog") {
    }
  };

  const handleClose = (value) => {
    setOpenPopup(false);
  };

  const handleNotify = () => {
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  return (
    <div>
      {" "}
      {pet.map((pet) => (
        <>
          <Card className={classes.card} key={pet.id}>
            <CardHeader
              avatar={<Avatar aria-label={pet.name}>{pet.name.charAt(0)}</Avatar>}
              action={
                <img
                  className={classes.icon}
                  alt="dog"
                  src={`${process.env.PUBLIC_URL + `/vector/${pet.animal}.png`}`}
                />
                // <IconButton aria-label="settings">
                //   <MoreVertIcon />
                // </IconButton>
              }
              title={pet.name}
              subheader={pet.breed}
            />
            <CardMedia
              component="img"
              height="400"
              image={`${process.env.PUBLIC_URL + "/puppy.jpg"}`}
              alt="animal"
              sx={{
                borderRadius: "6px",
                backgroundColor: "#fff",
                padding: "15px",
              }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              className={classes.imgStack}
              spacing={1}
            >
              <img
                className={classes.image}
                alt="dog"
                src={`${process.env.PUBLIC_URL + "/dog2.png"}`}
              />
              <img
                className={classes.image}
                alt="dog"
                src={`${process.env.PUBLIC_URL + "/dog1.png"}`}
              />
              <img
                className={classes.image}
                alt="dog"
                src={`${process.env.PUBLIC_URL + "/dog2.png"}`}
              />
              <img
                className={classes.image}
                alt="dog"
                src={`${process.env.PUBLIC_URL + "/dog1.png"}`}
              />
            </Stack>

            <CardContent className={classes.cardContent}>
              <Typography className={classes.animalTitle} variant="h6">
                Description
              </Typography>
              <Typography variant="body2">{pet.description}</Typography>
              <IconButton
                aria-label="location"
                sx={{
                  height: "45px",
                  marginTop: "25px",
                  borderRadius: "4px",
                  padding: "6px 15px",
                  paddingBottom: "15px",
                  backgroundColor: "#F0F6FF",
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
                  {pet.city}, {pet.state}
                </Typography>
              </IconButton>
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                variant="contained"
                className={classes.btn}
                onClick={() => {
                  setOpenPopup(true);
                }}
              >
                Adopt {pet.name}
              </Button>
            </CardActions>
          </Card>
          <Popup
            openPopup={openPopup}
            name={pet.name}
            onClose={handleClose}
            setOpenPopup={setOpenPopup}
            notifyInfo={handleNotify}
          />
        </>
      ))}
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default DetailsPage;

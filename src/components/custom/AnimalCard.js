import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import CommentIcon from "@mui/icons-material/Comment";
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
      top: "-40px"
  },
  btn: {
    borderRadius: "100px !important",
    backgroundColor: "#0D75FF",
    textTransform: "capitalize"
  }
}));

const AnimalCard = () => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 400, padding: "25px" }}>
      <CardMedia
        component="img"
        height="194"
        image={`${process.env.PUBLIC_URL + "/puppy.jpg"}`}
        alt="animal"
        sx={{borderRadius: "6px"}}
      />
      <CardContent>
        <Typography className={classes.animalTitle} variant="h6">
          Luna
        </Typography>

        <Typography
          className={classes.animalBreed}
          variant="body2"
          color="text.secondary"
        >
          Havenese
        </Typography>
        <img className={classes.icon} alt="dog" src={`${process.env.PUBLIC_URL + "/vector/dog.png"}`} />
      </CardContent>

      <CardActions sx={{justifyContent: "space-between", marginTop: "-40px"}}>
        <Button variant="contained" className={classes.btn} >
          View Details
        </Button>
        <IconButton aria-label="location" sx={{cursor: "default",  "&:hover": {
            backgroundColor: "#ffffff",}
            }}>
          <Typography variant="body2">
            <LocationOnOutlinedIcon
              style={{ position: "relative", top: "5px" }}
            />
            Seattle, WA
          </Typography>
        </IconButton>
      </CardActions>
      
    </Card>
  );
};

export default AnimalCard;

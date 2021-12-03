import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#40196D",
    height: "55px",
  },
  root: {
    // "&.MuiButtonBase-root": {
    //   borderRadius: "6px",
    // backgroundColor: "#3d6bb3 !important",
    // },
    "&.MuiChip-root": {
      borderRadius: "8px",
      backgroundColor: "rgba(13, 117, 255, 0.05)",
      padding: "10px 5px"
    },

    "& .MuiChip-label": {
      color: "#0D75FF",
      fontSize: "18px",
    },
    "& .MuiChip-deleteIcon": {
        color: "#0D75FF",
    },
  },
}));

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Chips() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Dogs" },
    { key: 1, label: "Cat" },
    // { key: 2, label: 'Polymer' },
    // { key: 3, label: 'React' },
    // { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === "React") {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              className={classes.root}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}

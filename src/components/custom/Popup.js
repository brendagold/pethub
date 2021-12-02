import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Stack } from "@mui/material";
import sizes from "../sizes";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: "40px",
    position: "absolute",
    top: theme.spacing(5),
    width: "400px",
    height: "250px",
    [sizes.down("sm")]: {
        height: "300px"
        
      },
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  span: {
    color: "red",
  },
  title: {
    //flexGrow: 1,
    fontFamily: "Work Sans",
    fontSize: "27px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "30px",
    letterSpacing: "-0.02em",
    textAlign: "center",
    marginTop: "5px",
    //color: "#58667E",
    color: "#344062",
  },
  btn: {
    backgroundColor: "#F3F5FB",
    color: "#58667E",
    "&:hover": {
      backgroundColor: "#F3F5FB",
    },
  },
}));

export default function Popup(props) {
  const { notifyInfo, onClose, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
    onClose={onClose}
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        {/* <div style={{ display: "flex" }}>
          <Button style={{alignSelf: "flex-end"}}
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div> */}
        <Typography variant="h6" component="div" className={classes.title}>
          Are you sure you want to adopt{" "}
          <span className={classes.span}>Luna</span>?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Button
          onClick={() => {
            setOpenPopup(false);
            notifyInfo()
          }}
            variant="contained"
            sx={{
                padding: "10px 20px",
              boxShadow: 0,
              "&:hover": {
                boxShadow: 0,
              },
            }}
          >
            Adopt Luna
          </Button>
          <Button
          onClick={() => {
            setOpenPopup(false);
          }}
            variant="contained"
            sx={{
                padding: "10px 20px",
              boxShadow: 0,
              backgroundColor: "#F3F5FB",
              color: "#58667E",
              "&:hover": {
                backgroundColor: "#F3F5FB",
                boxShadow: 0,
              },
            }}
          >
            Cancel
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

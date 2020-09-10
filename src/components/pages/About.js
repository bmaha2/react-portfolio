import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import profileImage from "../../assets/images/bipin.JPG";
import OutlinedCard from "../OutlinedCard";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  color: {
    color: "white",
  },
  span: {
    fontFamily: 'Dancing Script',
    fontSize: '32px'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Box mx="auto" className={classes.root}>
        <Avatar
          alt="Bipin Maharjan"
          src={profileImage}
          className={classes.large}
        />
      </Box>
      <Box m={2}>
        <Typography component="h6" variant="h6">
          Hi! I am <span className = {classes.span}>Bipin Maharjan</span>, recently graduated from UW coding bootcamp
          with full-stack certificate. I've a background in Electrical
          Engineering and retail management. Checkout my work in Portfolio
          section.
        </Typography>
      </Box>
      <OutlinedCard />
    </>
  );
}

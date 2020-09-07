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
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Avatar
          alt="Bipin Maharjan"
          src={profileImage}
          className={classes.large}
        />
      </div>
      <Box color="grey.300">
        <Typography
          className={classes.root}
          gutterBottom
          component="h6"
          variant="h6"
        >
          maharjanbipin@gmail.com
        </Typography>
      </Box>
      <OutlinedCard />
    </>
  );
}

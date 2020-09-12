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
  
  background : {
    backgroundColor: '#E8EEF1'
  },
  span: {
    
    fontFamily: 'Dancing Script',
    fontSize: '26px'
  },
  email: {
    display: 'flex',
    fontFamily: 'kufam',
    fontWeight: 'bold'

  }
 
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box boxShadow= {3} borderRadius={16} className = {classes.background} >
      <Box mx="auto"className={classes.root}>
        <Avatar
          alt="Bipin Maharjan"
          src={profileImage}
          className={classes.large}
        />
      </Box>
      <Box className={classes.root}>
      <Typography component='p' className = {classes.email}>
         maharjanbipin@gmail.com
        </Typography>
      </Box>
      <Box m={2}>
        <Typography component="h6" variant="h6">
          Hi, I am <span className = {classes.span}>Bipin Maharjan</span>, recently graduated from UW coding bootcamp
          as a <span className = {classes.span}>Full Stack Web Developer</span>. I've a background in Electrical
          Engineering and retail management. Checkout my work in Portfolio
          section.
        </Typography>
      </Box>
      <OutlinedCard />
    </Box>
  );
}

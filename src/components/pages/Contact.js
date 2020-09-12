import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      "& > *": {
        margin: theme.spacing(2),
      },
    },
}));
export default function Contact() { 
    const classes = useStyles();
return(
    <>
<Box className = {classes.root}>
        <Typography component="h6" variant="h6">
         Email: maharjanbipin@gmail.com <br /> or simply use email link below
        </Typography>
        </Box>
        <Box className = {classes.root}>
        <Typography component="h6" variant="h6">
         Stay in touch in gitHub, linkedIn using one of the links below
        </Typography>
        </Box>
        </>

)};
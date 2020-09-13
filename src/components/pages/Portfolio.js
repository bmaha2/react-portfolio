import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LinkIcon from "@material-ui/icons/Link";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Box from "@material-ui/core/Box";
import data from "../../assets/data";
import Modal from "../Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    border: "3px solid #b5803f",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },

  link: {
    margin: theme.spacing(1),
  },
}));

function Portfolio() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box mx="auto" boxShadow={10} className={classes.root}>
      <Paper square className={classes.header}>
        <Typography variant="h5" component="h2">
          {data[activeStep].title}
        </Typography>
      </Paper>
      <img
        className={classes.img}
        src={data[activeStep].pic}
        alt={data[activeStep].title}
      />
      <Paper square>
        <Button
          className={classes.link}
          variant="contained"
          color="primary"
          size="small"
          href={`https://github.com/${data[activeStep].github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon size="medium" />
          gitHub
        </Button>
        <Button
          className={classes.link}
          variant="contained"
          color="primary"
          size="small"
          href={data[activeStep].deployed}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <VisibilityIcon size="medium" />
          DEMO
        </Button>

        <Modal
          description1={data[activeStep].description1}
          description2={data[activeStep].description2}
          title={data[activeStep].title}
        />
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Portfolio;

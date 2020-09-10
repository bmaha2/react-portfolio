import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LinkIcon from "@material-ui/icons/Link";
import VisibilityIcon from "@material-ui/icons/Visibility";

import weather_pic from "../../assets/images/weather-app.png";
import workday_pic from "../../assets/images/work-day.PNG";
import election_pic from "../../assets/images/election.PNG";
import pandemic_pic from "../../assets/images/pandemic-pantry.PNG";
import aqir_pic from "../../assets/images/aqir.png";
import employeeDir_pic from "../../assets/images/employee-directory.PNG";
import CustomizedDialogs from "../CustomizedDialogs";

const data = [
  {
    pic: weather_pic,
    title: "5-Day forecast",
    description:
      "Search the city to view current forecast in the dashboard as well as 5 day forecast",
    github: "bmaha2/weather-app.git",
    deployed: "https://bmaha2.github.io/weather-app/",
  },
  {
    pic: workday_pic,
    title: "Work Day Scheduler",
    description:
      "Schedule your workday with hour colored blocked to indicate present, past or future",
    github: "bmaha2/WorkDayScheduler.git",
    deployed: "https://bmaha2.github.io/WorkDayScheduler/",
  },
  {
    pic: employeeDir_pic,
    title: "Employee Directory",
    description:
      "Employee directory with search functionality by name of the employee",
    github: "bmaha2/Employee-Directory.git",
    deployed: "https://sad-payne-831947.netlify.app/",
  },
  {
    pic: pandemic_pic,
    title: "Pandemic Pantry",
    description:
      "Group Proj#1 Search for the recipe with any item, tolerences can be set as well",
    github: "jeffreyadamo/GroupProject1-PandemicPantry.git",
    deployed: "https://jeffreyadamo.github.io/GroupProject1-PandemicPantry/",
  },
  {
    pic: aqir_pic,
    title: "Aqir",
    description:
      "Group Proj#2 e-comm site with user authentication to post items",
    github: "ngoudeau2012/project_aqir.git",
    deployed: "https://thawing-castle-93200.herokuapp.com/",
  },
  {
    pic: election_pic,
    title: "Represent-Me",
    description:
      "Group Proj#3 app to find information on their local government",
    github: "gidmp/Represent-Me.git",
    deployed: "https://represent-me-2020.herokuapp.com/",
  },
];

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
    <Box mx="auto" boxShadow={3} className={classes.root}>
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
          Live
        </Button>

        <CustomizedDialogs
          description={data[activeStep].description}
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

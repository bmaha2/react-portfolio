import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import weather_pic from "../../assets/images/weather-app.png";
import workday_pic from "../../assets/images/work-day.PNG";
import election_pic from "../../assets/images/election.PNG";
import pandemic_pic from "../../assets/images/pandemic-pantry.PNG";
import aqir_pic from "../../assets/images/aqir.PNG";
import employeeDir_pic from "../../assets/images/employee-directory.PNG"
import MediaCard from "../MediaCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-3 border-0">
            <div className="card-header">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
      </div>{/*<!--end of header-->*/}
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Paper>
              <MediaCard
                pic={weather_pic}
                title="5-Day forecast"
                description="Search the city to view current forecast in the dashboard as well as 5 day forecast"
                github="bmaha2/weather-app.git"
                deployed="https://bmaha2.github.io/weather-app/">
                /></MediaCard>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper>
              <MediaCard
                pic={workday_pic}
                title="Work Day Scheduler"
                description="Schedule your workday with hour colored blocked to indicate present, past or future"
                github="bmaha2/WorkDayScheduler.git"
                deployed="https://bmaha2.github.io/WorkDayScheduler/">
                /></MediaCard>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper>
              <MediaCard
                pic={employeeDir_pic}
                title="Employee Directory"
                description="Employee directory with search functionality by name of the employee"
                github="bmaha2/Employee-Directory.git"
                deployed="https://sad-payne-831947.netlify.app/">
                /></MediaCard>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper>
              <MediaCard
                pic={pandemic_pic}
                title="Pandemic Pantry"
                description="Group Proj#1 Search for the recipe with tolerances"
                github="jeffreyadamo/GroupProject1-PandemicPantry.git"
                deployed="https://jeffreyadamo.github.io/GroupProject1-PandemicPantry/">
                /></MediaCard>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper>
              <MediaCard
                pic={aqir_pic}
                title="Aqir"
                description="Group Proj#2 e-comm site with user authentication to post items"
                github="ngoudeau2012/project_aqir.git"
                deployed="https://thawing-castle-93200.herokuapp.com/">
                /></MediaCard>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper>
              <MediaCard
                pic={election_pic}
                title="Represent-Me"
                description="Group Proj#3 app to find information on their local government"
                github="gidmp/Represent-Me.git"
                deployed="https://represent-me-2020.herokuapp.com/">
                /></MediaCard>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Portfolio;

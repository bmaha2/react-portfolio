import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    display: "inline-flex",
    verticalAlign: "middle",
  },
}));

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item sm={6} container justify="center">
          <Paper className={classes.paper} elevation={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5">
                  <Box
                    fontWeight="fontWeightMedium"
                    textAlign="center"
                    m={1}
                    color="grey.100"
                    bgcolor="info.dark"
                    boxShadow={8}
                    borderRadius={4}
                  >
                    <StarBorderIcon fontSize="small" /> About Me{" "}
                    <StarBorderIcon fontSize="small" />
                  </Box>
                </Typography>
                <Typography component="h6">
                  Hi! I am Bipin Maharjan, recently graduated from UW coding
                  bootcamp with full-stack certificate. I've background in
                  Electrical Engineering and retail management. Checkout my work
                  in Portfolio section.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item sm={6} container justify="center">
          <Paper className={classes.paper} elevation={3}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  <Box
                    fontWeight="fontWeightMedium"
                    textAlign="center"
                    m={1}
                    color="grey.100"
                    bgcolor="info.dark"
                    boxShadow={10}
                    borderRadius={6}
                    lineHeight="normal"
                  >
                    <StarBorderIcon fontSize="small" /> Technologies{" "}
                    <StarBorderIcon fontSize="small" />
                  </Box>
                </Typography>
                <Typography variant="h5">
                  <CheckIcon
                    className={classes.icon}
                    color="primary"
                    fontSize="small"
                  />{" "}
                  HTML
                </Typography>
                <Typography variant="h5">
                  <CheckIcon
                    className={classes.icon}
                    color="primary"
                    fontSize="small"
                  />{" "}
                  CSS{" "}
                </Typography>
                <Typography variant="h5">
                  <CheckIcon
                    className={classes.icon}
                    color="primary"
                    fontSize="small"
                  />{" "}
                  JavaScript
                </Typography>
                <Typography variant="h5">
                  <CheckIcon
                    className={classes.icon}
                    color="primary"
                    fontSize="small"
                  />{" "}
                  jQuery{" "}
                </Typography>
                <Typography variant="h5">
                  <CheckIcon
                    className={classes.icon}
                    color="primary"
                    fontSize="small"
                  />{" "}
                  MERN stack{" "}
                </Typography>
                <Typography variant="h5">
                  <CheckIcon
                    className={classes.icon}
                    color="primary"
                    fontSize="small"
                  />{" "}
                  git{" "}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

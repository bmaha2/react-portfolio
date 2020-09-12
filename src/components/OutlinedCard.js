// import React from "react";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import CheckIcon from "@material-ui/icons/CheckCircleOutlineRounded";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     flexWrap: 'wrap',
//   },
//   paper: {
//     padding: theme.spacing(3),
//     textAlign: "left",
//     color: theme.palette.text.secondary,
//     width: 300,
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   icon: {
//     display: "inline-flex",
//     verticalAlign: "middle",
//   },
// }));

// export default function OutlinedCard() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container justify="center" spacing={3}>
//         <Grid item sm={6} container justify="center">
//           <Paper className={classes.paper} elevation={3}>
//             <Card variant="outlined">
//               <CardContent>
//                 <Typography variant="h5">
//                   <Box
//                     fontWeight="fontWeightMedium"
//                     textAlign="center"
//                     m={1}
//                     color="grey.100"
//                     bgcolor="info.dark"
//                     boxShadow={8}
//                     borderRadius={4}
//                   >
//                     About Me

//                   </Box>
//                 </Typography>
//                 <Typography component="h6">
//                   Hi! I am Bipin Maharjan, recently graduated from UW coding
//                   bootcamp with full-stack certificate. I've background in
//                   Electrical Engineering and retail management. Checkout my work
//                   in Portfolio section.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Paper>
//         </Grid>
//         <Grid item sm={6} container justify="center">
//           <Paper className={classes.paper} >
//             <Card className={classes.card} variant="outlined">
//               <CardContent>
//                 <Typography variant="h5" component="h2">
//                   <Box
//                     fontWeight="fontWeightMedium"
//                     textAlign="center"
//                     m={1}
//                     color="grey.100"
//                     bgcolor="info.dark"
//                     boxShadow={10}
//                     borderRadius={6}
//                     lineHeight="normal"
//                   >
//                     Technologies{" "}

//                   </Box>
//                 </Typography>
//                 <Typography variant="h5">
//                   <CheckIcon
//                     className={classes.icon}
//                     color="primary"
//                     fontSize="small"
//                   />{" "}
//                   HTML
//                 </Typography>
//                 <Typography variant="h5">
//                   <CheckIcon
//                     className={classes.icon}
//                     color="primary"
//                     fontSize="small"
//                   />{" "}
//                   CSS{" "}
//                 </Typography>
//                 <Typography variant="h5">
//                   <CheckIcon
//                     className={classes.icon}
//                     color="primary"
//                     fontSize="small"
//                   />{" "}
//                   JavaScript
//                 </Typography>
//                 <Typography variant="h5">
//                   <CheckIcon
//                     className={classes.icon}
//                     color="primary"
//                     fontSize="small"
//                   />{" "}
//                   jQuery{" "}
//                 </Typography>
//                 <Typography variant="h5">
//                   <CheckIcon
//                     className={classes.icon}
//                     color="primary"
//                     fontSize="small"
//                   />{" "}
//                   MERN stack{" "}
//                 </Typography>
//                 <Typography variant="h5">
//                   <CheckIcon
//                     className={classes.icon}
//                     color="primary"
//                     fontSize="small"
//                   />{" "}
//                   git{" "}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    color: "black",
    fontSize: "16px",
    backgroundColor: "rgb(253 243 213)",
    border: "2px solid #b5803f",
    boxShadow: "1px 3px #888888",
  },
}));

export default function OutlinedCard() {
  const classes = useStyles();
  // eslint-disable-next-line
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "HTML" },
    { key: 1, label: "CSS" },
    { key: 2, label: "JavaScript" },
    { key: 3, label: "MongoDB" },
    { key: 4, label: "Express" },
    { key: 5, label: "React"},
    { key: 6, label: "Node" },
    { key: 7, label: "MySql" },
    { key: 8, label: "git" },
  ]);

  return (
    <>
      <Box
        mx="auto"
        fontWeight="fontWeightMedium"
        textAlign="center"
        m={1}
        color="grey.100"
        bgcolor="info.dark"
        boxShadow={6}
        borderRadius={4}
        width={100}
      >
        <Typography gutterBottom component="h6" variant="h6">
          SKILLS
        </Typography>
      </Box>
      <Box className={classes.root} >
        {chipData.map((data) => {
          return (
            <li key={data.key}>
              <Chip
                icon={<TagFacesIcon />}
                label={data.label}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Box>
    </>
  );
}

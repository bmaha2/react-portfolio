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

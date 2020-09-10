import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MailIcon from "@material-ui/icons/Mail";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Pdf from "../assets/Resume.pdf";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#f8f8ff",
    borderTop: "2px solid #cccccc",
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Email"
        icon={<MailIcon />}
        href="mailto:maharjanbipin@gmail.com"
      />
      <BottomNavigationAction
        label="gitHub"
        icon={<GitHubIcon />}
        href="https://github.com/bmaha2"
        target="_blank"
        rel="noopener"
      />
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/bipin-maharjan-82819538/"
        target="_blank"
        rel="noopener"
      />
      <BottomNavigationAction
        label="Resume"
        icon={<FileCopyIcon />}
        href={Pdf}
        target="_blank"
        rel="noopener"
      />
    </BottomNavigation>
  );
}

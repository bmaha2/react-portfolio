// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import Pdf from "../assets/Resume.pdf"
// // import InsideContainer from "./InsideContainer";

// // function NavTabs() {

// //     const location = useLocation();

// //     return (
// //         <>
// //         <div className="row m-0">
// //             <div className="col-lg-12 bg-header">
// //                 <nav className="navbar navbar-expand-lg navbar-light">

// //                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
// //                         <span className="navbar-toggler-icon"></span>
// //                     </button>
// //                     {/*button when the nav-bar collapses */}
// //                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //                         <ul className="navbar-nav ml-auto ">
// //                             <li className="nav-item">
// //                                 <a className="btn btn-block btn-social btn-github" href={"https://github.com/bmaha2"} target="_blank" rel="noopener noreferrer">
// //                                     <span className="fa fa-github"></span> Github
// //                                     </a>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <a className="btn btn-block btn-social btn-linkedin"
// //                                     href={"https://www.linkedin.com/in/bipin-maharjan-82819538/"} target="_blank" rel="noopener noreferrer">
// //                                     <span className="fa fa-linkedin"></span> LinkedIn
// //                                     </a>
// //                             </li>

// //                             <li className="nav-item">
// //                                 <a className="btn btn-block btn-social btn-resume" href={Pdf} target="_blank" rel="noopener noreferrer"><span className="fa fa-user-plus"></span>Resume</a>
// //                             </li>

// //                             <li className="nav-item">
// //                                 <Link
// //                                     to="/About"
// //                                     className={location.pathname === "About/" ? "nav-link active" : "nav-link"}
// //                                 ><span className="fa fa-home"></span> About
// //                                     </Link>
// //                             </li>

// //                             <li className="nav-item">
// //                                 <Link
// //                                     to="/contact"
// //                                     className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
// //                                 ><span className="fa fa-user-plus"></span> Contact
// //                                     </Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link
// //                                     to="/portfolio"
// //                                     className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
// //                                 ><span className="fa fa-briefcase"></span> Portfolio
// //                                   </Link>
// //                             </li>
// //                         </ul> {/*end of links on nav bar links */}
// //                     </div>{/*end of collapsible nav-bar */}
// //                 </nav>{/*end of navbar */}
// //             </div>
// //         </div>
// //         < InsideContainer />
// //         </>

// //     );
// // }
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// import { Link, useLocation } from "react-router-dom";
// import Pdf from "../assets/Resume.pdf";
// import HomeIcon from '@material-ui/icons/Home';
// import WorkIcon from '@material-ui/icons/Work';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

// import InsideContainer from "./InsideContainer";



// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,

//     },
//     menuButton: {
//         marginRight: theme.spacing(2),

//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

// export default function NavTabs() {
//     const classes = useStyles();
//     const location = useLocation();

//     return (
//         <>
//             <div className={classes.root}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <Typography variant="h6" className={classes.title}>
//                             Bipin Maharjan
//                         </Typography>
//                         <Button color="inherit">
//                             <Link to="/About" className={location.pathname === "About/" ? "nav-link active" : "nav-link"}> <HomeIcon fontSize= "large" /></Link>
//                         </Button>
//                         <Button color="inherit"><a className="btn btn-block btn-social btn-github" href={"https://github.com/bmaha2"} target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize = "large" /></a>
//                         </Button>
//                         <Button color="inherit"><a className="btn btn-block btn-social btn-linkedin"href={"https://www.linkedin.com/in/bipin-maharjan-82819538/"} target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize = "large" /></a>
//                         </Button>
//                         <Button color="inherit"> <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}><WorkIcon  /> Portfolio</Link>
//                         </Button>
//                         <Button color="inherit"><a className="btn btn-block btn-social btn-resume" href={Pdf} target="_blank" rel="noopener noreferrer"><FileCopyIcon />Resume</a>
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//             < InsideContainer />
//         </>
//     );
// }



// //export default NavTabs;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import { Route } from "react-router-dom";



import About from "../components/pages/About";
import Portfolio from "../components/pages/Portfolio";


import Footer from "./Footer";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Route>{children}</Route>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavTabs(props) {
    const {selectionFollowsFocus} = props;

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                        centered
                        selectionFollowsFocus = {selectionFollowsFocus}
                    >
                        <LinkTab label="Home"{...a11yProps(0)} />
                        <LinkTab label="portfolio" {...a11yProps(1)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Route component={About} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Route component={Portfolio} />
                </TabPanel>
            <Footer />
            </div>
        

    );
}
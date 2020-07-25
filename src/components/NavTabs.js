import React from "react";
import { Link, useLocation } from "react-router-dom";
import Pdf from "../assets/Resume.pdf"
import InsideContainer from "./InsideContainer";

function NavTabs() {

    const location = useLocation();

    return (
        <>
        <div className="row m-0">
            <div className="col-lg-12 bg-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-brand" href="#">
                        <h1>Bipin Maharjan</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*button when the nav-bar collapses */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="btn btn-block btn-social btn-github" href={"https:github.com/bmaha2"} target="_blank" rel="noopener noreferrer">
                                    <span className="fa fa-github"></span> Github
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-block btn-social btn-linkedin"
                                    href={"https://www.linkedin.com/in/bipin-maharjan-82819538/"} target="_blank" rel="noopener noreferrer">
                                    <span className="fa fa-linkedin"></span> LinkedIn
                                    </a>
                            </li>

                            <li className="nav-item">
                                <a className="btn btn-block btn-social btn-resume" href={Pdf} target="_blank" rel="noopener noreferrer"><span className="fa fa-user-plus"></span>Resume</a>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/About"
                                    className={location.pathname === "About/" ? "nav-link active" : "nav-link"}
                                ><span className="fa fa-home"></span> About
                                    </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                                ><span className="fa fa-user-plus"></span> Contact
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/portfolio"
                                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                                ><span className="fa fa-briefcase"></span> Portfolio
                                  </Link>
                            </li>
                        </ul> {/*end of links on nav bar links */}
                    </div>{/*end of collapsible nav-bar */}
                </nav>{/*end of navbar */}
                
            </div>
        </div>
        < InsideContainer />
        </>

    );
}

export default NavTabs;

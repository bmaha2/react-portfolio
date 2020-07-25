import React from 'react';
import { Route } from "react-router-dom";
import About from "../components/pages/About";
import Portfolio from "../components/pages/Portfolio";
import Contact from "../components/pages/Contact";
import Footer from "./Footer"

function InsideContainer() {
    return (
        <>
        <div className="container inside-container shadow bg-white rounded">
            <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        </div>
        <Footer />
        </>

    )
}

export default InsideContainer;
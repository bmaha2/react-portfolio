import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";

export default function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavTabs />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

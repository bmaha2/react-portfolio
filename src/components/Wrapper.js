import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavTabs from "../components/NavTabs";

export default function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavTabs>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </NavTabs>
      </Container>
    </React.Fragment>
  );
}
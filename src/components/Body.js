import React from "react";
import styled, { keyframes } from "styled-components";
import Grid from '@material-ui/core/Grid';

import StockDetails from "./StockDetails";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";
import NavBar from './NavBar';




const Body = () => {
  return (
    <Grid container>
      <NavBar />
      <Grid item xs={10}>
        <MainDisplay />
        <StockDetails />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Body;

import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import styled from 'styled-components';
import {device} from '../styles/media';

import StockDetails from "./StockDetails";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";
import NavBar from './NavBar';

const StyledDiv = styled.div`
  width: 100%;

  @media ${device.tablet}{
    width: calc(100% - 240px);
    background-color: yellow;
  }
`

const Body = () => {
  return (
    <Grid container>
      <NavBar />
      <StyledDiv>
        <Container>
          <MainDisplay />
          <StockDetails />
          <Footer />
        </Container>
      </StyledDiv>
    </Grid>
  );
};

export default Body;

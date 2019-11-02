import React from "react";
import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";
import Grid from '@material-ui/core/Grid';

import StockDetails from "./StockDetails";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";

const bounceUpAnimation = keyframes`${bounceInUp}`;

const BodyWrapper = styled(Grid)`
  animation: 1s ${bounceUpAnimation};
`;

const LeftGrid = styled(Grid)`
  background-color: gray;
  height: 100vh;
`

const Body = () => {
  return (
    <BodyWrapper container>
      <LeftGrid item xs={2}></LeftGrid>
      <Grid item xs={10}>
      <MainDisplay />
      <StockDetails />
      <Footer />
      </Grid>
    </BodyWrapper>
  );
};

export default Body;

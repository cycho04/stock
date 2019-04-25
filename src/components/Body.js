import React from "react";
import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

import Chart from "./Chart";
import StockDetails from "./StockDetails";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";

const bounceUpAnimation = keyframes`${bounceInUp}`;

const BodyWrapper = styled.div`
  animation: 1s ${bounceUpAnimation};
`;

const Body = () => {
  return (
    <BodyWrapper className="ui container">
      <MainDisplay />
      <Chart />
      <StockDetails />
      <Footer />
    </BodyWrapper>
  );
};

export default Body;

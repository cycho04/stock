import React from "react";
import { CSSTransition } from "react-transition-group";

import Chart from "./Chart";
import StockDetails from "./StockDetails";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";

import "./style/Body.css";

const Body = props => {
  return (
    <CSSTransition
      in={!props.landingPage}
      classNames="body-page"
      appear
      timeout={1500}
    >
      <div className="ui container body-page">
        <MainDisplay />
        <Chart />
        <StockDetails />
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default Body;

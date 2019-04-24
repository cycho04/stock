import React from "react";

import Chart from "./Chart";
import StockDetails from "./StockDetails";
import MainDisplay from "./MainDisplay";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="ui container">
      <MainDisplay />
      <Chart />
      <StockDetails />
      <Footer />
    </div>
  );
};

export default Body;

import React, { Fragment } from "react";

import StockStatistics from "./StockStatistics";
import CompanyInfo from "./CompanyInfo";
import FinancialInfo from "./FinancialInfo";
import DisplayNews from "./DisplayNews";

const StockDetails = () => {
  return (
    <Fragment>
      <CompanyInfo />
      <StockStatistics />
      <DisplayNews />
      <FinancialInfo />
    </Fragment>
  );
};

export default StockDetails;

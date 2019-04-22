import React, { Fragment } from "react";
import FeaturedStocks from "./FeaturedStocks";
import StockSearch from "./StockSearch";

class LandingPage extends React.Component {
  render() {
    return (
      <Fragment>
        <FeaturedStocks initialAnimation={this.props.initialAnimation} />
        <StockSearch initialAnimation={this.props.initialAnimation} />
      </Fragment>
    );
  }
}

export default LandingPage;

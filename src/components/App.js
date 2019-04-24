import React, { Fragment } from "react";
import { connect } from "react-redux";

import {
  fetchCompanyInfo,
  fetchFinancialInfo,
  fetchQuoteInfo,
  fetchNews,
  fetchImages,
  fetchSymbols,
  fetchChartInfo
} from "../actions";
import Body from "./Body";
import LandingPage from "./LandingPage";
import Calendar from "./Calendar";

class App extends React.Component {
  state = { landingPage: true };

  componentDidMount() {
    this.props.fetchSymbols(this.generateRandomNumbers);
  }

  generateRandomNumbers = props => {
    let randomNums = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * props);
      randomNums = [...randomNums, randomNumber];
    }
    return randomNums;
  };

  initialAnimation = () => {
    if (this.state.landingPage === true) {
      this.setState({ landingPage: !this.state.landingPage });
    }
  };

  render() {
    return (
      <Fragment>
        <LandingPage
          landingPage={this.state.landingPage}
          initialAnimation={this.initialAnimation}
        />
        {!this.state.landingPage ? (
          <Body landingPage={this.state.landingPage} />
        ) : (
          <Calendar landingPage={this.state.landingPage} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCompanyInfo,
    fetchFinancialInfo,
    fetchQuoteInfo,
    fetchNews,
    fetchImages,
    fetchSymbols,
    fetchChartInfo
  }
)(App);

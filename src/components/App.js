import React from "react";
import { connect } from "react-redux";
import API from '../apis/API';

import {} from "../actions";
import Body from "./Body";
import Calendar from "./Calendar";

class App extends React.Component {
  
  state = { landingPage: true };

  // componentDidMount() {
  //   API.get(`/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=8QBZDOU3TZQI8IYA`)
  //   .then(res => console.log(res))
  // }

  render() {
    return (
      <>
        {true ? (
          <Body landingPage={this.state.landingPage} />
        ) : (
          <Calendar landingPage={this.state.landingPage} />
        )}
      </>
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
  null
)(App);

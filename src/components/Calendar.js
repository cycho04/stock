import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import "./style/Calendar.css";

class Calendar extends React.Component {
  state = { time: "" };

  //timer
  componentDidMount() {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      this.setState(() => {
        return { time: time };
      });
    }, 1000);
  }

  openOrClosed = latestSource => {
    if (
      latestSource === "IEX real time price" ||
      latestSource === "15 minute delayed price"
    ) {
      return <span style={{ color: "green" }}>Open</span>;
    }
    return <span style={{ color: "red" }}>Closed</span>;
  };

  render() {
    return (
      <CSSTransition
        in={this.props.landingPage}
        classNames="calendar-page"
        appear
        timeout={3000}
      >
        <div className="calendar-page">
          <div className="centerIcon">
            <i className="massive circular green money bill outline icon" />
          </div>

          <div className="timer">{this.state.time}</div>
          <div className="market">
            Market is currently{" "}
            {this.openOrClosed(this.props.state.quote.quote.latestSource)}
          </div>
          <h3 className="landingPageDescription">
            Click a random stock or search for a stock symbol to get started
          </h3>
        </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(Calendar);

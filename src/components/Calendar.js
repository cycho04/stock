import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

const bounceInUpAnimations = keyframes`${bounceInUp}`;

const Wrapper = styled.div`
  text-align: center !important;
  font-size: 3em !important;
  line-height: 1em !important;
  animation: 2s ${bounceInUpAnimations};
`;

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

  //Market status
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
      <Wrapper>
        <div>
          <i className="huge circular green money bill outline icon" />
        </div>

        <div>{this.state.time}</div>
        <div>
          Market is currently{" "}
          {this.openOrClosed(this.props.state.quote.quote.latestSource)}
        </div>
        <h3 className="landingPageDescription">
          Click a random stock or search for a stock symbol to get started
        </h3>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(Calendar);

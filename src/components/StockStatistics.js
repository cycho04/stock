import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Title = styled.th`
  font-weight: 900;
  font-size: 1.2em;
`;

const Banner = styled.div`
  padding-top: 6em;
  padding-bottom: 2em;
`;

const Wrapper = styled.div`
  background-color: transparent !important;
  border: none !important;
  color: black !important;
  td {
    width: 25% !important;
    padding-bottom: 1em;
  }
  table {
    text-align: center !important;
  }
`;

const StockStatistics = props => {
  //used to display N/A if no data
  const noValue = value => {
    if (value) {
      return Number(value).toLocaleString();
    }
    if (Number(value).toLocaleString() === NaN) {
      return <div>N/A</div>;
    }
  };

  const quoteInfo = props.state.quote.quote;

  return (
    <Fragment>
      <Banner className="ui horizontal divider">
        <h2>STATISTICS</h2>
      </Banner>

      <Wrapper>
        <table align="center">
          <tr>
            <Title>Open</Title>
            <Title>Close</Title>
            <Title>High</Title>
            <Title>Low</Title>
          </tr>
          <tr>
            <td>{noValue(quoteInfo.open)}</td>
            <td>{noValue(quoteInfo.close)}</td>
            <td>{noValue(quoteInfo.high)}</td>
            <td>{noValue(quoteInfo.low)}</td>
          </tr>
          <tr>
            <Title>Latest Source</Title>
            <Title>Latest Volume</Title>
            <Title>Previous Close</Title>
            <Title>Change</Title>
          </tr>
          <tr>
            <td>{quoteInfo.latestSource}</td>
            <td>{noValue(quoteInfo.latestVolume)}</td>
            <td>{noValue(quoteInfo.previousClose)}</td>

            <td>{noValue(quoteInfo.change)}</td>
          </tr>
          <tr>
            <Title>Change %</Title>
            <Title>P/E Ratio</Title>
            <Title>Week 52 Low</Title>
            <Title>Week 52 High</Title>
          </tr>
          <tr>
            <td>{noValue(quoteInfo.changePercent)}</td>
            <td>{noValue(quoteInfo.peRatio)}</td>
            <td>{noValue(quoteInfo.week52Low)}</td>
            <td>{noValue(quoteInfo.week52High)}</td>
          </tr>
          <tr>
            <Title>Market Cap</Title>
            <Title />
            <Title />
            <Title>Year to Date Change</Title>
          </tr>
          <tr>
            <td>{noValue(quoteInfo.marketCap)}</td>
            <td />
            <td />
            <td>{noValue(quoteInfo.ytdChange)}</td>
          </tr>
        </table>
      </Wrapper>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(StockStatistics);

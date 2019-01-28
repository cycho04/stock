import React from 'react';
import { connect } from 'react-redux';

const StockStatistics = props => {

    const quoteInfo = props.state.quote.quote;

    return (
        <div className='ui segment'>
            <h3>Statistics</h3>
            <ul>
                <li>Open: {quoteInfo.open}</li>
                <li>Close: {quoteInfo.close}</li>
                <li>High: {quoteInfo.high}</li>
                <li>Low: {quoteInfo.low}</li>
                <li>Latest Price: {quoteInfo.latestPrice}</li>
                <li>Latest Source: {quoteInfo.latestSource}</li>
                <li>Latest Volume: {quoteInfo.latestVolume}</li>
                <li>Previous Close: {quoteInfo.previousClose}</li>
                <li>Change: {quoteInfo.change}</li>
                <li>Change %: {quoteInfo.changePercent}</li>
                <li>Market Cap: {quoteInfo.marketCap}</li>
                <li>P/E Ratio: {quoteInfo.peRatio}</li>
                <li>Week 52 High: {quoteInfo.week52High}</li>
                <li>Week 52 Low: {quoteInfo.week52Low}</li>
                <li>Year to Date Change: {quoteInfo.ytdChange}</li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(StockStatistics);
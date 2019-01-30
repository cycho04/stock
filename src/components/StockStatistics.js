import React from 'react';
import { connect } from 'react-redux';

const StockStatistics = props => {

    const quoteInfo = props.state.quote.quote;

    return (
        <div className='ui segment'>
            <h3>Statistics</h3>
            <ul>
                <li className="ui teal image label">Open: <div className="detail">{quoteInfo.open}</div></li>
                <li className="ui teal image label">Close: <div className="detail">{quoteInfo.close}</div></li>
                <li className="ui teal image label">High: <div className="detail">{quoteInfo.high}</div></li>
                <li className="ui teal image label">Low: <div className="detail">{quoteInfo.low}</div></li>
                <li className="ui teal image label">Latest Price: <div className="detail">{quoteInfo.latestPrice}</div></li>
                <li className="ui teal image label">Latest Source: <div className="detail">{quoteInfo.latestSource}</div></li>
                <li className="ui teal image label">Latest Volume: <div className="detail">{quoteInfo.latestVolume}</div></li>
                <li className="ui teal image label">Previous Close: <div className="detail">{quoteInfo.previousClose}</div></li>
                <li className="ui teal image label">Change: <div className="detail">{quoteInfo.change}</div></li>
                <li className="ui teal image label">Change %: <div className="detail">{quoteInfo.changePercent}</div></li>
                <li className="ui teal image label">Market Cap: <div className="detail">{quoteInfo.marketCap}</div></li>
                <li className="ui teal image label">P/E Ratio: <div className="detail">{quoteInfo.peRatio}</div></li>
                <li className="ui teal image label">Week 52 High: <div className="detail">{quoteInfo.week52High}</div></li>
                <li className="ui teal image label">Week 52 Low: <div className="detail">{quoteInfo.week52Low}</div></li>
                <li className="ui teal image label">Year to Date Change: <div className="detail">{quoteInfo.ytdChange}</div></li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(StockStatistics);
import React from 'react';
import { connect } from 'react-redux';

const StockStatistics = props => {

    const quoteInfo = props.state.quote.quote;

    return (
        <div className='ui raised segment'>
            <a className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>Statistics</a>
                <div className="ui black image label">Open: <div className="detail">{quoteInfo.open}</div></div>
                <div className="ui black image label">Close: <div className="detail">{quoteInfo.close}</div></div>
                <div className="ui black image label">High: <div className="detail">{quoteInfo.high}</div></div>
                <div className="ui black image label">Low: <div className="detail">{quoteInfo.low}</div></div>
                <div className="ui black image label">Latest Source: <div className="detail">{quoteInfo.latestSource}</div></div>
                <div className="ui black image label">Latest Volume: <div className="detail">{quoteInfo.latestVolume}</div></div>
                <div className="ui black image label">Previous Close: <div className="detail">{quoteInfo.previousClose}</div></div>
                <div className="ui black image label">Change: <div className="detail">{quoteInfo.change}</div></div>
                <div className="ui black image label">Change %: <div className="detail">{quoteInfo.changePercent}</div></div>
                <div className="ui black image label">Market Cap: <div className="detail">{quoteInfo.marketCap}</div></div>
                <div className="ui black image label">P/E Ratio: <div className="detail">{quoteInfo.peRatio}</div></div>
                <div className="ui black image label">Week 52 High: <div className="detail">{quoteInfo.week52High}</div></div>
                <div className="ui black image label">Week 52 Low: <div className="detail">{quoteInfo.week52Low}</div></div>
                <div className="ui black image label">Year to Date Change: <div className="detail">{quoteInfo.ytdChange}</div></div>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(StockStatistics);
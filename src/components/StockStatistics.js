import React from 'react';
import { connect } from 'react-redux';

import './style/StockStatistics.css'

const StockStatistics = props => {

    //used to display N/A if no data
    const noValue = value => {
        if (value){
            return Number(value).toLocaleString();
        }
        if(Number(value).toLocaleString() === NaN){
            return <div>N/A</div>;    
        }
    }

    const quoteInfo = props.state.quote.quote;

    return (
        <div className='ui raised stockstatistics segment'>
            <div className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>Statistics</div>

                <table className='ui single line stockstatistics table' align='center'>
                    <thead>
                        <tr>
                            <th className='stockstatistics' colSpan='4'>
                                Report Date - 'Need Fix'
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Open</td>
                        <td>{noValue(quoteInfo.open)}</td>
                        <td>Close</td>
                        <td>{noValue(quoteInfo.close)}</td>
                    </tr>
                    <tr>
                        <td>High</td>
                        <td>{noValue(quoteInfo.high)}</td>
                        <td>Low</td>
                        <td>{noValue(quoteInfo.low)}</td>
                    </tr>
                    <tr>
                        <td>Latest Source</td>
                        <td>{quoteInfo.latestSource}</td>
                        <td>Latest Volume</td>
                        <td>{noValue(quoteInfo.latestVolume)}</td>
                    </tr>
                    <tr>
                        <td>Previous Close</td>
                        <td>{noValue(quoteInfo.previousClose)}</td>
                        <td>Change</td>
                        <td>{noValue(quoteInfo.change)}</td>
                    </tr>
                    <tr>
                        <td>Change %</td>
                        <td>{noValue(quoteInfo.changePercent)}</td>
                        <td>P/E Ratio</td>
                        <td>{noValue(quoteInfo.peRatio)}</td>
                    </tr>
                    <tr>
                        <td>Week 52 Low</td>
                        <td>{noValue(quoteInfo.week52Low)}</td>
                        <td>Week 52 High</td>
                        <td>{noValue(quoteInfo.week52High)}</td>
                    </tr>
                    <tr>
                        <td>Market Cap</td>
                        <td>{noValue(quoteInfo.marketCap)}</td>
                        <td>Year to Date Change</td>
                        <td>{noValue(quoteInfo.ytdChange)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(StockStatistics);
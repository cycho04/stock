import React from 'react';
import { connect } from 'react-redux';

import './style/StockStatistics.css'

const StockStatistics = props => {

    const quoteInfo = props.state.quote.quote;

    return (
        <div className='ui raised stockstatistics segment'>
            <div className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>Statistics</div>

                <table className='ui single line stockstatistics table' align='center'>
                    <thead>
                        <tr>
                            <th className='stockstatistics' colspan='4'>
                                Report Date - 'Need Fix'
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Open</td>
                        <td>{quoteInfo.open}</td>
                        <td>Close</td>
                        <td>{quoteInfo.close}</td>
                    </tr>
                    <tr>
                        <td>High</td>
                        <td>{quoteInfo.high}</td>
                        <td>Low</td>
                        <td>{quoteInfo.low}</td>
                    </tr>
                    <tr>
                        <td>Latest Source</td>
                        <td>{quoteInfo.latestSource}</td>
                        <td>Latest Volume</td>
                        <td>{quoteInfo.latestVolume}</td>
                    </tr>
                    <tr>
                        <td>Previous Close</td>
                        <td>{quoteInfo.previousClose}</td>
                        <td>Change</td>
                        <td>{quoteInfo.change}</td>
                    </tr>
                    <tr>
                        <td>Change %</td>
                        <td>{quoteInfo.changePercent}</td>
                        <td>P/E Ratio</td>
                        <td>{quoteInfo.peRatio}</td>
                    </tr>
                    <tr>
                        <td>Week 52 Low</td>
                        <td>{quoteInfo.week52Low}</td>
                        <td>Week 52 High</td>
                        <td>{quoteInfo.week52High}</td>
                    </tr>
                    <tr>
                        <td>Market Cap</td>
                        <td>{quoteInfo.marketCap}</td>
                        <td>Year to Date Change</td>
                        <td>{quoteInfo.ytdChange}</td>
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
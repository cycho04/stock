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
        <div>
            <div className='ui horizontal divider topbanner'>STATISTICS</div>

            <div className='ui raised stockstatistics segment'>
                <div className={`ui black ribbon label`}>Reported Date - 'Need Fix'</div>
                    <table className='ui single line stockstatistics' align='center'>
                        <tbody>
                        <tr>
                            <td className='title'>Open</td>
                            <td>{noValue(quoteInfo.open)}</td>
                            <td className='title'>Close</td>
                            <td>{noValue(quoteInfo.close)}</td>
                        </tr>
                        <tr>
                            <td className='title'>High</td>
                            <td>{noValue(quoteInfo.high)}</td>
                            <td className='title'>Low</td>
                            <td>{noValue(quoteInfo.low)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Latest Source</td>
                            <td>{quoteInfo.latestSource}</td>
                            <td className='title'>Latest Volume</td>
                            <td>{noValue(quoteInfo.latestVolume)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Previous Close</td>
                            <td>{noValue(quoteInfo.previousClose)}</td>
                            <td className='title'>Change</td>
                            <td>{noValue(quoteInfo.change)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Change %</td>
                            <td>{noValue(quoteInfo.changePercent)}</td>
                            <td className='title'>P/E Ratio</td>
                            <td>{noValue(quoteInfo.peRatio)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Week 52 Low</td>
                            <td>{noValue(quoteInfo.week52Low)}</td>
                            <td className='title'>Week 52 High</td>
                            <td>{noValue(quoteInfo.week52High)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Market Cap</td>
                            <td>{noValue(quoteInfo.marketCap)}</td>
                            <td className='title'>Year to Date Change</td>
                            <td>{noValue(quoteInfo.ytdChange)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
        
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(StockStatistics);
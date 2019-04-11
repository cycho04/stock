import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Title = styled.div`
    font-weight: 900;
    font-size: 1.2em;
`

const Banner = styled.div`
    padding-top: 6.0em;
    padding-bottom: 2.0em;
`

const Wrapper = styled.div`
    background-color: transparent !important;
    border: none !important;
    color: black !important;
    td {
        width: 25% !important;
        padding-bottom: 1.0em;
    }
    table {
        text-align: center !important;
    }
`



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
            <Banner className='ui horizontal divider'>
                <h2>STATISTICS</h2>
            </Banner>

            <Wrapper>
                    <table align='center'>
                        <tbody>
                        <tr>
                            <Title>Open</Title>
                            <td>{noValue(quoteInfo.open)}</td>
                            <Title>Close</Title>
                            <td>{noValue(quoteInfo.close)}</td>
                        </tr>
                        <tr>
                            <Title>High</Title>
                            <td>{noValue(quoteInfo.high)}</td>
                            <Title>Low</Title>
                            <td>{noValue(quoteInfo.low)}</td>
                        </tr>
                        <tr>
                            <Title>Latest Source</Title>
                            <td>{quoteInfo.latestSource}</td>
                            <Title>Latest Volume</Title>
                            <td>{noValue(quoteInfo.latestVolume)}</td>
                        </tr>
                        <tr>
                            <Title>Previous Close</Title>
                            <td>{noValue(quoteInfo.previousClose)}</td>
                            <Title>Change</Title>
                            <td>{noValue(quoteInfo.change)}</td>
                        </tr>
                        <tr>
                            <Title>Change %</Title>
                            <td>{noValue(quoteInfo.changePercent)}</td>
                            <Title>P/E Ratio</Title>
                            <td>{noValue(quoteInfo.peRatio)}</td>
                        </tr>
                        <tr>
                            <Title>Week 52 Low</Title>
                            <td>{noValue(quoteInfo.week52Low)}</td>
                            <Title>Week 52 High</Title>
                            <td>{noValue(quoteInfo.week52High)}</td>
                        </tr>
                        <tr>
                            <Title>Market Cap</Title>
                            <td>{noValue(quoteInfo.marketCap)}</td>
                            <Title>Year to Date Change</Title>
                            <td>{noValue(quoteInfo.ytdChange)}</td>
                        </tr>
                    </tbody>
                </table>
            </Wrapper>    
        </div>
        
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(StockStatistics);
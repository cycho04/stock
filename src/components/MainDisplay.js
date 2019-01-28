import React from 'react';
import { connect } from 'react-redux';
import './style/MainDisplay.css';

const MainDisplay = (props) => {
    return(
        <div className='ui segment center'>
            <h3>{props.symbol}</h3>
            <h1>$ {props.price}</h1>
            <h3>{props.change} ({props.changePercent}%)</h3>
        </div>
    )
};

const mapStateToProps = state => {
    return { 
        symbol: state.quote.quote.symbol,
        price: state.quote.quote.latestPrice,
        change: state.quote.quote.change,
        changePercent: state.quote.quote.changePercent
    }
}

export default connect(mapStateToProps)(MainDisplay);
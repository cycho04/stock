import React from 'react';
import { connect } from 'react-redux';
import './style/MainDisplay.css';

const MainDisplay = (props) => {

    const upOrDown = props.change >= 0 ? 'up' : 'down';
    const plusSign = props.change >= 0 ? '+' : '';

    return(
        <div className={`ui segment center maindisplay ${upOrDown}`}>
            <div><span className='large'>{props.state.company.company.companyName}</span></div>
            <div>{props.symbol}</div>
            <h1 className='largePrice'>$ {(props.price).toFixed(2)}</h1>
            <h3>{plusSign}{(props.change).toFixed(3)} ({plusSign}{(props.changePercent).toFixed(3)}%)</h3>
        </div>
    )
};

const mapStateToProps = state => {
    return { 
        symbol: state.quote.quote.symbol,
        price: state.quote.quote.latestPrice,
        change: state.quote.quote.change,
        changePercent: state.quote.quote.changePercent,
        state: state
    }
}

export default connect(mapStateToProps)(MainDisplay);
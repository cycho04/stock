import React from 'react';
import { connect } from 'react-redux';
import './style/MainDisplay.css';

const MainDisplay = (props) => {

    const upOrDown = props.change >= 0 ? 'up' : 'down';
    const plusSign = props.change >= 0 ? '+' : '';

    return(
        <div className={`ui raised segment center ${upOrDown}`}>
            <div><span className='large'>{props.state.company.company.companyName}</span>|<span>{props.symbol}</span></div>
            <h1 className='largePrice'>$ {props.price}</h1>
            <h3>{plusSign}{props.change} ({plusSign}{props.changePercent}%)</h3>
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
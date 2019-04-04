import React from 'react';
import { connect } from 'react-redux';
import './style/MainDisplay.css';

const MainDisplay = (props) => {
    console.log(props.price)

    const upOrDown = props.change >= 0 ? 'up' : 'down';
    const plusSign = props.change >= 0 ? '+' : '';

    return(
        <div className={`ui center maindisplay`}>
            <div><span className='large'>{props.state.company.company.companyName}</span></div>
            <div>{props.symbol}</div>
            <h1 className='largePrice'>$ {(props.price).toFixed(2)}</h1>
            <h3 className={`percent ${upOrDown}`}>{plusSign}{(props.change).toFixed(3)} ({plusSign}{(props.changePercent).toFixed(3)}%)</h3>
        </div>
    )
};

//had to add ternary below. side affect of adding react-router (something to do with passing down props in <Route />)
const mapStateToProps = state => {
    return { 
        symbol: state.quote.quote.symbol,
        price: typeof state.quote.quote.latestPrice === "string" ? 0 : state.quote.quote.latestPrice,
        change: typeof state.quote.quote.change === "string" ? 0 : state.quote.quote.change,
        changePercent: typeof state.quote.quote.changePercent === "string" ? 0 : state.quote.quote.changePercent,
        state: state
    }
}

export default connect(mapStateToProps)(MainDisplay);
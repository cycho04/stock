import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Wrapper = styled.div`
    text-align: center;
    background-color: transparent !important;
    margin-top: 1.0em !important;
    border: none !important;
`

const CompanyName = styled.div`
    font-size: 2.5em;
    font-family: 'Staatliches', cursive;
    line-height: 1.0em;
`

const Price = styled.h1`
    font-size: 5.0em;
`
//Need to pass a property to this Component to access props in color
const Percent = styled.h3`
    color: ${props => props.change >= 0 ? 'green' : 'red'};
    font-size: 2.0em !important;
`


const MainDisplay = (props) => {
    const upOrDown = props.change >= 0 ? 'up' : 'down';
    const plusSign = props.change >= 0 ? '+' : '';

    return(
        <Wrapper>
            <CompanyName>{props.state.company.company.companyName}</CompanyName>
            <div>{props.symbol}</div>
            <Price>$ {(props.price).toFixed(2)}</Price>
            <Percent change={props.change}>{plusSign}{(props.change).toFixed(3)} ({plusSign}{(props.changePercent).toFixed(3)}%)</Percent>
        </Wrapper>
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
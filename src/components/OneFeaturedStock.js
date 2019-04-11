import React from 'react';
import { connect } from  'react-redux';
import styled from 'styled-components';

import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo } from '../actions';


const CompanyName = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
const Wrapper = styled.div`
    padding-top: 1.0em;
    padding-bottom: 1.0em;
    
    color: white !important;
    text-align: center;
    background-color: ${props => props.hover ? 'white !important' : 'transparent'} !important;
`
const Container = styled.div`
    
    @media (max-width: 50em){
        
        margin: auto !important;
        width: 100% !important;
        padding-bottom: 0 !important;

        .header{
            width: 50% !important;
            margin: none !important;
            float: left !important;
        }
        .context{
            width: 50% !important;
            margin: none !important;
        }
    }
`

const Symbol = styled.div`
    font-weight: 900;
`




class OneFeaturedStock extends React.Component {
    state={ hover: false }

    handleHover = () => {
        this.setState({ hover: true})
    }
    handleLeave = () => {
        this.setState({ hover: false})
    }

    //updates store with clicked stock.
    handleClick = () => {
        const stock = this.props.data[this.props.randomNum].symbol;
        this.props.fetchCompanyInfo(stock);
        this.props.fetchFinancialInfo(stock);
        this.props.fetchQuoteInfo(stock);
        this.props.fetchNews(stock);
        this.props.fetchImages(10);
        this.props.fetchChartInfo(stock);
        this.props.initialAnimation()
    }

    render(){
        return (
            <Container key={this.props.i} className='column' onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
                <Wrapper className='ui fluid' onClick={this.handleClick} hover={this.state.hover}>
                    <div className='content'>
                        <Symbol className='header'>{this.props.data[this.props.randomNum].symbol}</Symbol> 
                        <CompanyName className='context' >
                            {this.props.data[this.props.randomNum].name ? this.props.data[this.props.randomNum].name : 'N/A'}
                        </CompanyName>
                    </div>    
                </Wrapper>
            </Container>
        )    
    }
}

const mapStateToProps = state => {
    return { 
        state: state,
        data: state.symbols.symbols.data
    }
}

export default connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo })(OneFeaturedStock);
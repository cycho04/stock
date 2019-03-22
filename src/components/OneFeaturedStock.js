import React from 'react';
import { connect } from  'react-redux';

import './style/OneFeaturedStock.css';
import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo } from '../actions';

class OneFeaturedStock extends React.Component {

    handleClick = () => {
        const stock = this.props.state.symbols.symbols.data[this.props.randomNum].symbol;
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
            <div key={this.props.i} className='column'>
                <div className='ui fluid card center individual' onClick={this.handleClick}>
                    <div className='content'>
                        <div className='header individual'>{this.props.state.symbols.symbols.data[this.props.randomNum].symbol}</div> 
                        <div className='overflow individual context'>{this.props.state.symbols.symbols.data[this.props.randomNum].name ? this.props.state.symbols.symbols.data[this.props.randomNum].name : 'N/A'}</div>
                    </div>    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo })(OneFeaturedStock);
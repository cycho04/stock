import React from 'react';
import { connect } from 'react-redux';

import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages } from '../actions';

class StockSearch extends React.Component {

    componentDidMount(){
        const stock = 'CAT';
        this.props.fetchCompanyInfo(stock);
        this.props.fetchFinancialInfo(stock);
        this.props.fetchQuoteInfo(stock);
        this.props.fetchNews(stock);
        this.props.fetchImages(10);
    }

    render(){
        return(
            <form className='ui form'>
                <input placeholder='Search Stocks' />
            </form>
        )
    }
};


export default connect(null, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages })(StockSearch);
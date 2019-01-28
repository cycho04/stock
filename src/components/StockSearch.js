import React from 'react';
import { connect } from 'react-redux';

import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews } from '../actions';

class StockSearch extends React.Component {

    componentDidMount(){
        this.props.fetchCompanyInfo('AAPL');
        this.props.fetchFinancialInfo('AAPL');
        this.props.fetchQuoteInfo('AAPL');
        this.props.fetchNews('AAPL');
    }

    render(){
        return(
            <form className='ui form'>
                <input placeholder='Search Stocks' />
            </form>
        )
    }
};


export default connect(null, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews })(StockSearch);
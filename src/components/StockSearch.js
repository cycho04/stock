import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages } from '../actions';

class StockSearch extends React.Component {
    renderInput = (formProps) => {
        return(
            <div>
                <input 
                    {...formProps.input}
                    placeholder='Search Stocks'
                    autoComplete='off'
                />    
            </div>
        )
    }

    onSubmit = (formValues) => {
        const stock = formValues.stockSymbol;
        this.props.fetchCompanyInfo(stock);
        this.props.fetchFinancialInfo(stock);
        this.props.fetchQuoteInfo(stock);
        this.props.fetchNews(stock);
        this.props.fetchImages(10);
    }

    render(){
        
        return(
            <form 
                className='ui form'
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field 
                    name='stockSymbol' 
                    component={this.renderInput} 
                />
                <button className='ui button primary'>Search</button>
            </form>
        )
    }
};

const mapStateToProps = state => {
    return {
        state: state
    }
}

const needConnectToo = connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages })(StockSearch)

export default reduxForm({
    form: 'stockSearch'
})(needConnectToo);
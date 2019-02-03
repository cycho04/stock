import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Calendar from './Calendar';
import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages } from '../actions';
import './style/StockSearch.css';

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
            <div className='ui padded grid banner'>
                <div className='four wide column'>       
                </div>
                <form 
                    className='ui form eight wide column'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field 
                        name='stockSymbol' 
                        component={this.renderInput} 
                    />
                    <button className='ui fluid darkgray button'>Search</button>
                </form>    
                <div className={`four wide column ${this.props.state.quote.quote.change >= 0 ? 'up' : 'down'}`}>
                    <Calendar />
                </div>
            </div>
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
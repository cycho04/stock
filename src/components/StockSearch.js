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
        console.log(formValues)
        const stock = formValues.stockSymbol.toUpperCase(); //the stock symbol given by user
        const availableStocks = this.props.state.symbols.symbols.data; //array of all the stocks provided by IEX. Use .symbol to access each stock's symbol. +8000 stocks.
        const realStock = availableStocks.find((el) => el.symbol === stock) // If the stock symbol doesnt exist, it is undefined, else an object.

        this.props.fetchCompanyInfo(stock);
        this.props.fetchFinancialInfo(stock);
        this.props.fetchQuoteInfo(stock);
        this.props.fetchNews(stock);
        this.props.fetchImages(10);
        
        
        if(!realStock){
            console.log('does not exist')
        }
    };


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
                    <button className={`ui fluid button ${this.props.state.quote.quote.change >= 0 ? 'test' : 'red'}`}>Search</button>
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

const validate = (formValues) => {
    const errors ={};
    console.log(formValues.stockSymbol);
}

const needConnectToo = connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages })(StockSearch)

export default reduxForm({
    form: 'stockSearch',
    validate: validate
})(needConnectToo);
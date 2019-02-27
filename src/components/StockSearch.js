import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchChartInfo } from '../actions';
import './style/StockSearch.css';
import AutoCompleteWrapper from './AutoCompleteWrapper';

class StockSearch extends React.Component {
    

    renderInput = formProps => <AutoCompleteWrapper formProps={formProps}/>;

    onSubmit = (formValues) => {
        //check for blank submission.
        if(formValues.stockSymbol){
            const stock = formValues.stockSymbol.toUpperCase(); //the stock symbol given by user
            const availableStocks = this.props.state.symbols.symbols.data; //array of all the stocks provided by IEX. Use .symbol to access each stock's symbol. +8000 stocks.
            const realStock = availableStocks.find((el) => el.symbol === stock) // If the stock symbol doesnt exist, it is undefined, else an object.

            this.props.fetchCompanyInfo(stock);
            this.props.fetchFinancialInfo(stock);
            this.props.fetchQuoteInfo(stock);
            this.props.fetchNews(stock);
            this.props.fetchImages(10); 
            this.props.fetchChartInfo(stock);
            
            if(!realStock){
                console.log('does not exist')
            }
        }
    };


    render(){
        return(
            <div className='ui padded grid banner'>
                <div className='six wide column'>       
                </div>
                <form 
                    className='ui form four wide column'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field 
                        name='stockSymbol' 
                        component={this.renderInput} 
                    />
                    <button className={`ui fluid button ${this.props.state.quote.quote.change >= 0 ? 'green' : 'red'}`} onClick={this.props.initialAnimation}>Search</button>
                </form>    
                <div className={`six wide column ${this.props.state.quote.quote.change >= 0 ? 'up' : 'down'}`}>
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
    console.log('validation needs fix');
}

const needConnectToo = connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchChartInfo })(StockSearch)

export default reduxForm({
    form: 'stockSearch',
    validate: validate
})(needConnectToo);
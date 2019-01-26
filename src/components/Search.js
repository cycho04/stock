import React from 'react';

import IEX from '../apis/IEX';
import { Field, reduxForm } from 'redux-form';


class Search extends React.Component {

    componentDidMount(){
        //fetch info from IEX api
        this.fetchStocks('tsla');
    }

    fetchStocks = async (stockName = null) => {
        if (stockName){
            const response = await IEX.get(`/stock/${stockName}/earnings`);
            console.log(response.data);    
        }
    }

    renderError = (formProps) => {
        if(formProps.meta.error && formProps.meta.touched){
            return(
                <div className='ui error message'>
                    <div className='header'>{formProps.meta.error}</div>
                </div>
            )
        }
    };

    renderInput = (formProps) => {
        return (
            <div className='field'>
                <label>{formProps.label}</label> 
                <input onChange={formProps.input.onChange} value={formProps.input.value} />  {/* {...formProps.input} Took props from formProps and passed it to input. for a single prop use value={formProps.input.value}*/}   
                {this.renderError(formProps)}
            </div>
        )
    };

    onSubmit(formValues){
        console.log('onsubmit');
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='stockName' label='Stock Symbol' component={this.renderInput}/>
                <button className='ui button primary'>Submit</button>
            </form>
        )
    };
};

const validate = (formValues) => {
    const errors = {};

    if(!formValues.stockName){
        errors.stockName = 'You must enter the name of the stock';
    }
    return errors;
}

export default reduxForm({
    form: 'fetchStock',
    validate: validate
})(Search);
import React from "react";
import { connect } from 'react-redux';

import StockSearch from './StockSearch';
import StockDetails from './StockDetails';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols } from '../actions';

class App extends React.Component {
    componentDidMount(){
        const stock = 'AAPL'
        this.props.fetchCompanyInfo(stock);
        this.props.fetchFinancialInfo(stock);
        this.props.fetchQuoteInfo(stock);
        this.props.fetchNews(stock);
        this.props.fetchImages(10);
        this.props.fetchSymbols();
    }

    render(){
        return(
            <div>
                <StockSearch />
                <div className= 'ui container'>    
                    <MainDisplay />
                    <StockDetails />
                </div>    
                <Footer />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols })(App);
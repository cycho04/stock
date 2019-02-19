import React from "react";
import { connect } from 'react-redux';

import Chart from './Chart';
import StockSearch from './StockSearch';
import StockDetails from './StockDetails';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import FeaturedStocks from  './FeaturedStocks';
import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo } from '../actions';
import './style/App.css';

class App extends React.Component {
    componentDidMount(){
        const stock = 'AAPL'
        this.props.fetchCompanyInfo(stock);
        this.props.fetchFinancialInfo(stock);
        this.props.fetchQuoteInfo(stock);
        this.props.fetchNews(stock);
        this.props.fetchImages(10);
        this.props.fetchSymbols(this.props, this.generateRandomNumbers);
        this.props.fetchChartInfo(stock);
    }

    generateRandomNumbers = props => {
        let randomNums = [];
        for (let i = 0; i < 5; i++){
            const randomNumber = Math.floor(Math.random() * props);
            randomNums = [...randomNums, randomNumber];
        }
        return randomNums;
    }

    render(){
        return(
            <div className='app'>
                <StockSearch />
                <FeaturedStocks />
                <div className= 'ui container'>    
                    <MainDisplay />
                    <Chart />
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
export default connect(mapStateToProps, { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo })(App);
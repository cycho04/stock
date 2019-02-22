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
import { CSSTransition } from 'react-transition-group';
import Test from './Test';

class App extends React.Component {
    //for transition purposes
    state={ clicked: false }

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

    animation = () => {
        this.setState({ clicked: !this.state.clicked })
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
                <CSSTransition in={this.state.clicked} classNames='test2' appear timeout={500} unmountOnExit>
                    <Test />
                </CSSTransition>
                <div onClick={this.animation} className={this.state.clicked ? 'false' : 'true'}>Testing</div>
                <FeaturedStocks />
                <StockSearch />
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
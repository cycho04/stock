import React from "react";
import { connect } from 'react-redux';

import StockSearch from './StockSearch';
import StockDetails from './StockDetails';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import FeaturedStocks from  './FeaturedStocks';
import { Line } from 'react-chartjs';
import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols } from '../actions';
import './style/App.css';

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
        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July", 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "#222626",
                    strokeColor: "green",
                    pointColor: "green",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        const options = {
            responsive: true,
            maintainAspectRatio: true,
            scaleGridLineColor: '#474B4F',
            scaleGridLineWidth: 0,
            datasetStrokeWidth: 10,
            scaleShowGridLines: false

        }
        return(
            <div className='app'>
                <StockSearch />
                <FeaturedStocks />
                <div className= 'ui container'>    
                    <MainDisplay />
                    <Line data={data} options={options} width='1100' height='500'/>
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
import React from "react";
import { connect } from 'react-redux';


import { fetchCompanyInfo, fetchFinancialInfo, fetchQuoteInfo, fetchNews, fetchImages, fetchSymbols, fetchChartInfo } from '../actions';
import './style/App.css';
import Body from './Body';
import LandingPage from './LandingPage';
import Calendar from './Calendar';



class App extends React.Component {
    //for transition purposes
    state={ landingPage: true }

    componentDidMount(){
        // const stock = 'AAPL'
        // this.props.fetchCompanyInfo(stock);
        // this.props.fetchFinancialInfo(stock);
        // this.props.fetchQuoteInfo(stock);
        // this.props.fetchNews(stock);
        // this.props.fetchImages(10);
        // this.props.fetchChartInfo(stock);
        this.props.fetchSymbols(this.generateRandomNumbers);
        
    }
    

    initialAnimation = () => {
        if(this.state.landingPage === true){
            this.setState({ landingPage: !this.state.landingPage })    
        }
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
                    <LandingPage landingPage={this.state.landingPage} initialAnimation={this.initialAnimation}/>
                    {!this.state.landingPage ? <Body landingPage={this.state.landingPage}/> : <Calendar landingPage={this.state.landingPage}/>}
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
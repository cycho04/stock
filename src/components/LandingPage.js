import React from 'react';
import FeaturedStocks from  './FeaturedStocks';
import StockSearch from './StockSearch';

import './style/LandingPage.css';


class LandingPage extends React.Component {
    render(){
        return(
            <div className='top'>
                <FeaturedStocks initialAnimation={this.props.initialAnimation}/>
                <StockSearch initialAnimation={this.props.initialAnimation}/>     
            </div>    
        )
    }
}

export default LandingPage;
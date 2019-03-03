import React from 'react';
import FeaturedStocks from  './FeaturedStocks';
import StockSearch from './StockSearch';
import Calendar from './Calendar';


class LandingPage extends React.Component {
    render(){
        return(
            <div>
                <FeaturedStocks initialAnimation={this.props.initialAnimation}/>
                <Calendar />
                <StockSearch initialAnimation={this.props.initialAnimation}/>     
            </div>    
        )
    }
}

export default LandingPage;
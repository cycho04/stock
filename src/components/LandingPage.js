import React from 'react';
import './style/LandingPage.css';
import FeaturedStocks from  './FeaturedStocks';
import StockSearch from './StockSearch';
import Calendar from './Calendar';
import { CSSTransition } from 'react-transition-group';

class LandingPage extends React.Component {
    render(){
        return(
            <CSSTransition
                in={this.props.landingPage} 
                classNames='landing-page' 
                appear 
                timeout={1000}
            >
                <div className='landing-page'>
                    <FeaturedStocks animation={this.props.animation}/>
                    <Calendar />
                    <StockSearch animation={this.props.animation}/>
                </div>    
            </CSSTransition>
        )
    }
}

export default LandingPage;
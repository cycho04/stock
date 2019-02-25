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
                timeout={1500}
            >
                <div className='landing-page parent'>
                    <div className='child'>
                        <FeaturedStocks initialAnimation={this.props.initialAnimation}/>
                        <Calendar />
                        <StockSearch initialAnimation={this.props.initialAnimation}/>    
                    </div>
                    
                </div>    
            </CSSTransition>
        )
    }
}

export default LandingPage;
import React from 'react';
import { connect } from  'react-redux';

import './style/FeaturedStocks.css';



const FeaturedStocks = props => {
    //randomNumber is an array with a single element of an array of 5 elements.[[1,2,3,4,5]]
    const arr = props.state.randomNumber[0];
    //need to check if arr exists(before api call randomNumber doesn't exist), thus check for undefined
    if(arr !== undefined && props.state.symbols.symbols){   
        return (
            <div className='ui segment transparent'> 
                <div className='ui five column grid'>
                    {arr.map((randomNum, i) => (
                        <div key={i} className='column'>
                            <div className='ui fluid card center individual' onClick={props.animation}>
                                <div className='content'>
                                    <div className='header individual'>{props.state.symbols.symbols.data[randomNum].symbol}<i className='angle double down icon'/></div> 
                                    <div className='description overflow individual'>{props.state.symbols.symbols.data[randomNum].name ? props.state.symbols.symbols.data[randomNum].name : 'N/A'}</div>
                                </div>    
                            </div>
                            
                        </div>
                    ))}
                </div>   
            </div>
                  
        )       
    }
    return <div>Loading...</div>
}

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(FeaturedStocks);
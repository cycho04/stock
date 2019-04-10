import React from 'react';
import { connect } from  'react-redux';
import styled from 'styled-components';

import OneFeaturedStock from './OneFeaturedStock';


const Wrapper = styled.div`
    background-image: linear-gradient(to right,#141E30, #243B55) !important;
    margin-top: 0 !important;
    border-style: none !important;

    @media (max-width: 50em){
        .transparent {
            padding-top: 0 !important;
            padding-bottom: 0!important;
        }
    }
`

const FeaturedStocks = props => {

    //randomNumber is an array with a single element of an array of 5 elements.[[1,2,3,4,5]]
    const arr = props.state.randomNumber[0];
    
    //need to check if arr exists(before api call randomNumber doesn't exist), thus check for undefined
    if(arr !== undefined && props.state.symbols.symbols){   
        return (
            <Wrapper className='ui segment'> 
                <div className='ui five column grid'>
                    {arr.map((randomNum, i) => (
                        <OneFeaturedStock key={i} randomNum={randomNum} i ={i} initialAnimation={props.initialAnimation}/>
                    ))}
                </div>   
            </Wrapper>
                  
        )       
    }
    return <div>Loading...</div>
}

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(FeaturedStocks);
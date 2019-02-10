import React from 'react';
import { connect } from  'react-redux';

const generateRandomNumbers = props => {
    let randomNums = [];
    for (let i = 0; i < 5; i++){
        const randomNumber = Math.floor(Math.random() * props.state.random);
        randomNums = [...randomNums, randomNumber];
    }
    console.log(randomNums);
    return randomNums;
}


const FeaturedStocks = props => {
    const arr = generateRandomNumbers(props);
    if(arr && props.state.symbols.symbols){     
        return (
            <div className='ui grid'>
                <div className='five column row'>
                    {arr.map((x) => (
                        <div className='column'>
                            <div>{props.state.symbols.symbols.data[x].name}</div>
                            <div>{props.state.symbols.symbols.data[x].symbol}</div>   
                        </div>
                    ))}
                </div>
                
            </div>     
        )       
    }
    return <div>hi</div>
}

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(FeaturedStocks);
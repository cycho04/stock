import React from 'react';
import { connect } from  'react-redux';
import { chooseRandomStock } from '../actions';




const FeaturedStocks = props => {
        return <div>Featured</div>    
    
}

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps, { chooseRandomStock })(FeaturedStocks);
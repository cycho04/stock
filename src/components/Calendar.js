import React from 'react';
import { connect } from 'react-redux';



class Calendar extends React.Component {

    render(){
    const year = new Date(this.props.state.quote.quote.latestUpdate).getFullYear();
    const day = new Date(this.props.state.quote.quote.latestUpdate).getDate();
    const month = new Date(this.props.state.quote.quote.latestUpdate).getMonth() + 1;

    return(
        <div>
            <div>
                {`Last updated: ${month} - ${day} - ${year}`}
            </div>
            <div>
                Market: {this.props.state.quote.quote.latestSource}
            </div>
        </div>
    )    
    }
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(Calendar);
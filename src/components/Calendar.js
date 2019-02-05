import React from 'react';
import { connect } from 'react-redux';



const Calendar = props => {
    const year = new Date(props.state.quote.quote.latestUpdate).getFullYear();
    const day = new Date(props.state.quote.quote.latestUpdate).getDate();
    const month = new Date(props.state.quote.quote.latestUpdate).getMonth() + 1;

    return(
        <div>
            <div>
                {`Last updated: ${month} - ${day} - ${year}`}
            </div>
            <div>
                Market: {props.state.quote.quote.latestSource}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(Calendar);
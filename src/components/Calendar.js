import React from 'react';
import { connect } from 'react-redux';

import './style/Calendar.css';


class Calendar extends React.Component {

    state = { time : '' }

    //timer
    componentDidMount(){
        setInterval(() => {
            const time = new Date().toLocaleTimeString();
            this.setState(() => {
               return {time: time} 
            });
        }, 1000)
    }

    openOrClosed = latestSource => {
        if (latestSource === "IEX real time price" || latestSource === "15 minute delayed price"){
            return <span style={{'color': 'green'}}>Open</span>;
        }
        return <span style={{'color': 'red'}}>Closed</span>;
    }

    render(){
        return(
            <div>
                <div className='timer'>
                    {this.state.time}
                </div>
                <div className='market'>
                    Market is currently {this.openOrClosed(this.props.state.quote.quote.latestSource)}
                </div>
            </div>
        )    
    }
};

const mapStateToProps = state => {
    return { state: state }
}

export default connect(mapStateToProps)(Calendar);
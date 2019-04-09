import React from 'react';
import { Line } from 'react-chartjs';
import { connect } from 'react-redux';

const Chart = ({ chart }) => {

    //checks if the data is fetch, else the array length is 0
    if(chart.length > 1){
        const dates = chart.map(info => info.date); //x axis
        const closePrices = chart.map(info => info.close); // y axis
        const data = {
            labels: dates,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "transparent",
                    strokeColor: "black",
                    pointColor: "black",
                    pointStrokeColor: "black",
                    pointHighlightFill: "black",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: closePrices
                }
            ]
        };
        const options = {
            responsive: true,
            maintainAspectRatio: true,
            scaleGridLineColor: 'black',
            scaleGridLineWidth: 0,
            datasetStrokeWidth: 3,
            scaleShowGridLines: false,
            scaleFontColor: 'black',
            scaleLineColor: 'black'
        }
        return (
            <Line className='mobile' data={data} options={options} width='1100' height='500'/>    
        )    
    }
    return <div>No Chart</div>
    
}

const mapStateToProps = state => {
    return {
        chart: state.chart
    }
}

export default connect(mapStateToProps)(Chart);
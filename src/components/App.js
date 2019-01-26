import React from 'react';

import Chart from './Chart';
import Description from './Description';
import Header from './Header';
import Search from './Search';

class App extends React.Component {
    render(){
        return (
            <div className='ui container'>
                <Header />
                <Search />
                <Chart />
                <Description />
            </div>
        )
    };
};

export default App;
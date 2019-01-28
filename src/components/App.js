import React from "react";

import StockSearch from './StockSearch';
import StockDetails from './StockDetails';
import MainDisplay from './MainDisplay';

class App extends React.Component {
    render(){
        return(
            <div className= 'ui container'>
                <StockSearch />
                <MainDisplay />
                <StockDetails />
            </div>
        )
    }
};

export default App;
import React from 'react';

import StockStatistics from './StockStatistics';
import CompanyInfo from './CompanyInfo';
import FinancialInfo from './FinancialInfo';
import DisplayNews from './DisplayNews';


const StockDetails = () => {
    return(
        <div>
            <StockStatistics />
            <DisplayNews />
            <CompanyInfo />
            <FinancialInfo />
        </div>
    )
};

export default StockDetails;
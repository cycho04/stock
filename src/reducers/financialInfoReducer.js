import { FINANCIAL_INFO } from '../actions/types';

//needed for initialization, when the data isn't fetched yet, but we try to access company.symbol in StockDetails.js. Else throws err.
const INITIAL_STATE = {
    financial:{
        //financials is in an array, since the API returns an array of 4 period worth of info. we are currently only interested in the latest info, therefore [0] in StockDetail
        financials: [
            {
            reportDate: "...",
            grossProfit: "...",
            costOfRevenue: "...",
            operatingRevenue: "...",
            totalRevenue: "...",
            operatingIncome: "...",
            netIncome: "...",
            researchAndDevelopment: "...",
            operatingExpense: "...",
            currentAssets: "...",
            totalAssets: "...",
            totalLiabilities: "...",
            currentCash: "...",
            currentDebt: "...",
            totalCash: "...",
            totalDebt: "...",
            shareholderEquity: "...",
            cashChange: "...",
            cashFlow: "...",
            operatingGainsLosses: "..."
            }
        ]
    }
}


export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FINANCIAL_INFO:
            return {...state, financial: action.payload};
        default:
            return state;
    }
}
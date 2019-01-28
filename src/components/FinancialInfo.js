import React from 'react';
import { connect } from  'react-redux';

const FinancialInfo = props => {

    const financialInfo = props.state.financial.financial.financials[0];

    return(
        <div className='ui segment'>
            <h2>Financial Info</h2>
            <ul>
                <li>Report Date = {financialInfo.reportDate}</li>
                <li>Gross Profit = {financialInfo.grossProfit}</li>
                <li>Cost of Revenue = {financialInfo.costOfRevenue}</li>
                <li>Operating Revenue = {financialInfo.operatingRevenue}</li>
                <li>Total Revenue = {financialInfo.totalRevenue}</li>
                <li>Operating Income = {financialInfo.operatingIncome}</li>
                <li>Net Income = {financialInfo.netIncome}</li>
                <li>Research and Development = {financialInfo.researchAndDevelopment}</li>
                <li>Operating Expense = {financialInfo.operatingExpense}</li>
                <li>Current Assests = {financialInfo.currentAssets}</li>
                <li>Total Assests = {financialInfo.totalAssets}</li>
                <li>Total Liabilities = {financialInfo.totalLiabilities}</li>
                <li>Current Cash = {financialInfo.currentCash}</li>
                <li>Current Debt = {financialInfo.currentDebt}</li>
                <li>Total Cash = {financialInfo.totalCash}</li>
                <li>Total Debt = {financialInfo.totalDebt}</li>
                <li>Shareholder Equity = {financialInfo.shareholderEquity}</li>
                <li>cash Change = {financialInfo.cashChange}</li>
                <li>Cash Flow = {financialInfo.cashFlow}</li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(FinancialInfo);
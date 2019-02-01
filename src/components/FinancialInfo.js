import React from 'react';
import { connect } from  'react-redux';

const FinancialInfo = props => {

    const financialInfo = props.state.financial.financial.financials[0];

    return(
        <div className='ui segment'>
            <h2>Financial Info</h2>
            <ul>
                <li className="ui teal image label">Report Date = <div className="detail">{financialInfo.reportDate}</div></li>
                <li className="ui teal image label">Gross Profit = <div className="detail">{financialInfo.grossProfit}</div></li>
                <li className="ui teal image label">Cost of Revenue = <div className="detail">{financialInfo.costOfRevenue}</div></li>
                <li className="ui teal image label">Operating Revenue = <div className="detail">{financialInfo.operatingRevenue}</div></li>
                <li className="ui teal image label">Total Revenue = <div className="detail">{financialInfo.totalRevenue}</div></li>
                <li className="ui teal image label">Operating Income = <div className="detail">{financialInfo.operatingIncome}</div></li>
                <li className="ui teal image label">Net Income = <div className="detail">{financialInfo.netIncome}</div></li>
                <li className="ui teal image label">Research and Development = <div className="detail">{financialInfo.researchAndDevelopment}</div></li>
                <li className="ui teal image label">Operating Expense = <div className="detail">{financialInfo.operatingExpense}</div></li>
                <li className="ui teal image label">Current Assests = <div className="detail">{financialInfo.currentAssets}</div></li>
                <li className="ui teal image label">Total Assests = <div className="detail">{financialInfo.totalAssets}</div></li>
                <li className="ui teal image label">Total Liabilities = <div className="detail">{financialInfo.totalLiabilities}</div></li>
                <li className="ui teal image label">Current Cash = <div className="detail">{financialInfo.currentCash}</div></li>
                <li className="ui teal image label">Current Debt = <div className="detail">{financialInfo.currentDebt}</div></li>
                <li className="ui teal image label">Total Cash = <div className="detail">{financialInfo.totalCash}</div></li>
                <li className="ui teal image label">Total Debt = <div className="detail">{financialInfo.totalDebt}</div></li>
                <li className="ui teal image label">Shareholder Equity = <div className="detail">{financialInfo.shareholderEquity}</div></li>
                <li className="ui teal image label">cash Change = <div className="detail">{financialInfo.cashChange}</div></li>
                <li className="ui teal image label">Cash Flow = <div className="detail">{financialInfo.cashFlow}</div></li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(FinancialInfo);
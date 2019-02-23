import React from 'react';
import { connect } from  'react-redux';

import './style/FinancialInfo.css';

const FinancialInfo = props => {

    //used to display N/A if no financial data
    const checkValue = value => {
        if (value){
            return Number(value).toLocaleString();
        }
        return <div>N/A</div>;    
    }
    
    //added conditional, for etfs and other stocks with no financial info, else error
    const financialInfo = props.state.financial.financial.financials ? props.state.financial.financial.financials[0] : '';
    return(
        <div className='ui raised financialinfo main segment'>
            <div className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>Financial Info</div>
            <table className='ui single line financialinfo table' align='center'>
            <thead>
                <tr>
                    <th className='financialinfo' colSpan='4'>
                        Report Date - {financialInfo.reportDate}
                    </th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>Cash Flow </td>
                        <td>{checkValue(financialInfo.cashFlow)}</td>
                        <td>Gross Profit </td>
                        <td>{checkValue(financialInfo.grossProfit)}</td>
                    </tr>
                    <tr>
                        <td>Cost of Revenue </td>
                        <td>{checkValue(financialInfo.costOfRevenue)}</td>
                        <td>Operating Revenue </td>
                        <td>{checkValue(financialInfo.operatingRevenue)}</td>
                    </tr>
                    <tr>
                        <td>Total Revenue </td>
                        <td>{checkValue(financialInfo.totalRevenue)}</td>
                        <td>Operating Income </td>
                        <td>{checkValue(financialInfo.operatingIncome)}</td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>{checkValue(financialInfo.netIncome)}</td>
                        <td>Research and Development</td>
                        <td>{checkValue(financialInfo.researchAndDevelopment)}</td>
                    </tr>
                    <tr>
                        <td>Operating Expense</td>
                        <td>{checkValue(financialInfo.operatingExpense)}</td>
                        <td>Current Assests</td>
                        <td>{checkValue(financialInfo.currentAssets)}</td>
                    </tr>
                    <tr>
                        <td>Total Assests</td>
                        <td>{checkValue(financialInfo.totalAssets)}</td>
                        <td>Total Liabilities</td>
                        <td>{checkValue(financialInfo.totalLiabilities)}</td>
                    </tr>
                    <tr>
                        <td>Current Cash </td>
                        <td>{checkValue(financialInfo.currentCash)}</td>
                        <td>Current Debt</td>
                        <td>{checkValue(financialInfo.currentDebt)}</td>
                    </tr>
                    <tr>
                        <td>Total Cash</td>
                        <td>{checkValue(financialInfo.totalCash)}</td>
                        <td>Total Debt</td>
                        <td>{checkValue(financialInfo.totalDebt)}</td>
                    </tr>
                    <tr>
                        <td>Shareholder Equity </td>
                        <td>{checkValue(financialInfo.shareholderEquity)}</td>
                        <td>cash Change </td>
                        <td>{checkValue(financialInfo.cashChange)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(FinancialInfo);
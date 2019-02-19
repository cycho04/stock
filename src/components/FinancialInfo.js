import React from 'react';
import { connect } from  'react-redux';

import './style/FinancialInfo.css';

const FinancialInfo = props => {

    //used to display N/A if no financial data
    const noValue = value => {
        if (value){
            return `$ ${value}`;
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
                        <td>{noValue(financialInfo.cashFlow)}</td>
                        <td>Gross Profit </td>
                        <td>{noValue(financialInfo.grossProfit)}</td>
                    </tr>
                    <tr>
                        <td>Cost of Revenue </td>
                        <td>{noValue(financialInfo.costOfRevenue)}</td>
                        <td>Operating Revenue </td>
                        <td>{noValue(financialInfo.operatingRevenue)}</td>
                    </tr>
                    <tr>
                        <td>Total Revenue </td>
                        <td>{noValue(financialInfo.totalRevenue)}</td>
                        <td>Operating Income </td>
                        <td>{noValue(financialInfo.operatingIncome)}</td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>{noValue(financialInfo.netIncome)}</td>
                        <td>Research and Development</td>
                        <td>{noValue(financialInfo.researchAndDevelopment)}</td>
                    </tr>
                    <tr>
                        <td>Operating Expense</td>
                        <td>{noValue(financialInfo.operatingExpense)}</td>
                        <td>Current Assests</td>
                        <td>{noValue(financialInfo.currentAssets)}</td>
                    </tr>
                    <tr>
                        <td>Total Assests</td>
                        <td>{noValue(financialInfo.totalAssets)}</td>
                        <td>Total Liabilities</td>
                        <td>{noValue(financialInfo.totalLiabilities)}</td>
                    </tr>
                    <tr>
                        <td>Current Cash </td>
                        <td>{noValue(financialInfo.currentCash)}</td>
                        <td>Current Debt</td>
                        <td>{noValue(financialInfo.currentDebt)}</td>
                    </tr>
                    <tr>
                        <td>Total Cash</td>
                        <td>{noValue(financialInfo.totalCash)}</td>
                        <td>Total Debt</td>
                        <td>{noValue(financialInfo.totalDebt)}</td>
                    </tr>
                    <tr>
                        <td>Shareholder Equity </td>
                        <td>{noValue(financialInfo.shareholderEquity)}</td>
                        <td>cash Change </td>
                        <td>{noValue(financialInfo.cashChange)}</td>
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
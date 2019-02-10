import React from 'react';
import { connect } from  'react-redux';

import './style/FinancialInfo.css';

const FinancialInfo = props => {

    //added conditional, for etfs and other stocks with no financial info, else error
    const financialInfo = props.state.financial.financial.financials ? props.state.financial.financial.financials[0] : '';

    return(
        <div className='ui raised financialinfo main segment'>
            <div className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>Financial Info</div>
            <table className='ui single line financialinfo table' align='center'>
            <thead>
                <tr>
                    <th className='financialinfo' colspan='4'>
                        Report Date - {financialInfo.reportDate}
                    </th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>Cash Flow </td>
                        <td>{financialInfo.cashFlow}</td>
                        <td>Gross Profit </td>
                        <td>{financialInfo.grossProfit}</td>
                    </tr>
                    <tr>
                        <td>Cost of Revenue </td>
                        <td>{financialInfo.costOfRevenue}</td>
                        <td>Operating Revenue </td>
                        <td>{financialInfo.operatingRevenue}</td>
                    </tr>
                    <tr>
                        <td>Total Revenue </td>
                        <td>{financialInfo.totalRevenue}</td>
                        <td>Operating Income </td>
                        <td>{financialInfo.operatingIncome}</td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>{financialInfo.netIncome}</td>
                        <td>Research and Development</td>
                        <td>{financialInfo.researchAndDevelopment}</td>
                    </tr>
                    <tr>
                        <td>Operating Expense</td>
                        <td>{financialInfo.operatingExpense}</td>
                        <td>Current Assests</td>
                        <td>{financialInfo.currentAssets}</td>
                    </tr>
                    <tr>
                        <td>Total Assests</td>
                        <td>{financialInfo.totalAssets}</td>
                        <td>Total Liabilities</td>
                        <td>{financialInfo.totalLiabilities}</td>
                    </tr>
                    <tr>
                        <td>Current Cash </td>
                        <td>{financialInfo.currentCash}</td>
                        <td>Current Debt</td>
                        <td>{financialInfo.currentDebt}</td>
                    </tr>
                    <tr>
                        <td>Total Cash</td>
                        <td>{financialInfo.totalCash}</td>
                        <td>Total Debt</td>
                        <td>{financialInfo.totalDebt}</td>
                    </tr>
                    <tr>
                        <td>Shareholder Equity </td>
                        <td>{financialInfo.shareholderEquity}</td>
                        <td>cash Change </td>
                        <td>{financialInfo.cashChange}</td>
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
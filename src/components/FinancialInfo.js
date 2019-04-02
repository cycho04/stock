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
        <div>
            <div className='ui horizontal divider topbanner'><h2>FINANCIALS</h2></div>
            <div className='ui financialinfo main'>
                <table className='ui financialinfo' align='center'>
                    <tbody>
                        <tr>
                            <td className='title'>Cash Flow </td>
                            <td>{checkValue(financialInfo.cashFlow)}</td>
                            <td className='title'>Gross Profit </td>
                            <td>{checkValue(financialInfo.grossProfit)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Cost of Revenue </td>
                            <td>{checkValue(financialInfo.costOfRevenue)}</td>
                            <td className='title'>Operating Revenue </td>
                            <td>{checkValue(financialInfo.operatingRevenue)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Total Revenue </td>
                            <td>{checkValue(financialInfo.totalRevenue)}</td>
                            <td className='title'>Operating Income </td>
                            <td>{checkValue(financialInfo.operatingIncome)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Net Income</td>
                            <td>{checkValue(financialInfo.netIncome)}</td>
                            <td className='title'>Research and Development</td>
                            <td>{checkValue(financialInfo.researchAndDevelopment)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Operating Expense</td>
                            <td>{checkValue(financialInfo.operatingExpense)}</td>
                            <td className='title'>Current Assests</td>
                            <td>{checkValue(financialInfo.currentAssets)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Total Assests</td>
                            <td>{checkValue(financialInfo.totalAssets)}</td>
                            <td className='title'>Total Liabilities</td>
                            <td>{checkValue(financialInfo.totalLiabilities)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Current Cash </td>
                            <td>{checkValue(financialInfo.currentCash)}</td>
                            <td className='title'>Current Debt</td>
                            <td>{checkValue(financialInfo.currentDebt)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Total Cash</td>
                            <td>{checkValue(financialInfo.totalCash)}</td>
                            <td className='title'>Total Debt</td>
                            <td>{checkValue(financialInfo.totalDebt)}</td>
                        </tr>
                        <tr>
                            <td className='title'>Shareholder Equity </td>
                            <td>{checkValue(financialInfo.shareholderEquity)}</td>
                            <td className='title'>Cash Change </td>
                            <td>{checkValue(financialInfo.cashChange)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
        
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(FinancialInfo);
import React from 'react';
import { connect } from  'react-redux';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: transparent !important;
    border: none !important;
    color: black !important;
    margin-bottom: 1.0em !important;
    td {
        width: 25% !important;
        padding-bottom: 1.0em;
    }
    table {
        text-align: center !important;
    }
`

const Banner = styled.div`
    padding-top: 6.0em;
    padding-bottom: 2.0em;
`

const Title = styled.td`
    font-size: 1.2em;
    font-weight: 900;
`

const FinancialInfo = props => {

    //used to display N/A if no financial data and format 
    const checkValue = value => {
        if (value){
            return Number(value).toLocaleString();
        }
        return <div>N/A</div>;    
    }
    
    //for etfs and other stocks with no financial info, else error
    const financialInfo = props.state.financial.financial.financials ? props.state.financial.financial.financials[0] : '';


    return(
        <div>
            <Banner className='ui horizontal divider'>
                <h2>FINANCIALS</h2>
            </Banner>
            <Wrapper>
                <table align='center'>
                    <tbody>
                        <tr>
                            <Title>Cash Flow </Title>
                            <td>{checkValue(financialInfo.cashFlow)}</td>
                            <Title>Gross Profit </Title>
                            <td>{checkValue(financialInfo.grossProfit)}</td>
                        </tr>
                        <tr>
                            <Title>Cost of Revenue </Title>
                            <td>{checkValue(financialInfo.costOfRevenue)}</td>
                            <Title>Operating Revenue </Title>
                            <td>{checkValue(financialInfo.operatingRevenue)}</td>
                        </tr>
                        <tr>
                            <Title>Total Revenue </Title>
                            <td>{checkValue(financialInfo.totalRevenue)}</td>
                            <Title>Operating Income </Title>
                            <td>{checkValue(financialInfo.operatingIncome)}</td>
                        </tr>
                        <tr>
                            <Title>Net Income</Title>
                            <td>{checkValue(financialInfo.netIncome)}</td>
                            <Title>Research and Development</Title>
                            <td>{checkValue(financialInfo.researchAndDevelopment)}</td>
                        </tr>
                        <tr>
                            <Title>Operating Expense</Title>
                            <td>{checkValue(financialInfo.operatingExpense)}</td>
                            <Title>Current Assests</Title>
                            <td>{checkValue(financialInfo.currentAssets)}</td>
                        </tr>
                        <tr>
                            <Title>Total Assests</Title>
                            <td>{checkValue(financialInfo.totalAssets)}</td>
                            <Title>Total Liabilities</Title>
                            <td>{checkValue(financialInfo.totalLiabilities)}</td>
                        </tr>
                        <tr>
                            <Title>Current Cash </Title>
                            <td>{checkValue(financialInfo.currentCash)}</td>
                            <Title>Current Debt</Title>
                            <td>{checkValue(financialInfo.currentDebt)}</td>
                        </tr>
                        <tr>
                            <Title>Total Cash</Title>
                            <td>{checkValue(financialInfo.totalCash)}</td>
                            <Title>Total Debt</Title>
                            <td>{checkValue(financialInfo.totalDebt)}</td>
                        </tr>
                        <tr>
                            <Title>Shareholder Equity </Title>
                            <td>{checkValue(financialInfo.shareholderEquity)}</td>
                            <Title>Cash Change </Title>
                            <td>{checkValue(financialInfo.cashChange)}</td>
                        </tr>
                    </tbody>
                </table>
            </Wrapper>    
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(FinancialInfo);
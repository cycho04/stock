import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: transparent !important;
  border: none !important;
  color: black !important;
  margin-bottom: 1em !important;
  td {
    width: 25% !important;
    padding-bottom: 1em;
  }
  table {
    text-align: center !important;
  }
`;

const Banner = styled.div`
  padding-top: 6em;
  padding-bottom: 2em;
`;

const Title = styled.th`
  font-size: 1.2em;
  font-weight: 900;
`;

const FinancialInfo = props => {
  //used to display N/A if no financial data and format
  const checkValue = value => {
    if (value) {
      return Number(value).toLocaleString();
    }
    return <div>N/A</div>;
  };

  //for etfs and other stocks with no financial info, else error
  const financialInfo = props.state.financial.financial.financials
    ? props.state.financial.financial.financials[0]
    : "";

  return (
    <Fragment>
      <Banner className="ui horizontal divider">
        <h2>FINANCIALS</h2>
      </Banner>
      <Wrapper>
        <table align="center">
          <tr>
            <Title>Cash Flow </Title>
            <Title>Gross Profit </Title>
            <Title>Cost of Revenue </Title>
            <Title>Operating Revenue </Title>
          </tr>
          <tr>
            <td>{checkValue(financialInfo.cashFlow)}</td>
            <td>{checkValue(financialInfo.grossProfit)}</td>
            <td>{checkValue(financialInfo.costOfRevenue)}</td>
            <td>{checkValue(financialInfo.operatingRevenue)}</td>
          </tr>
          <tr>
            <Title>Total Revenue </Title>
            <Title>Operating Income </Title>
            <Title>Net Income</Title>
            <Title>Research and Development</Title>
          </tr>
          <tr>
            <td>{checkValue(financialInfo.totalRevenue)}</td>
            <td>{checkValue(financialInfo.operatingIncome)}</td>
            <td>{checkValue(financialInfo.netIncome)}</td>
            <td>{checkValue(financialInfo.researchAndDevelopment)}</td>
          </tr>
          <tr>
            <Title>Operating Expense</Title>
            <Title>Current Assests</Title>
            <Title>Total Assests</Title>
            <Title>Total Liabilities</Title>
          </tr>
          <tr>
            <td>{checkValue(financialInfo.operatingExpense)}</td>
            <td>{checkValue(financialInfo.currentAssets)}</td>
            <td>{checkValue(financialInfo.totalAssets)}</td>
            <td>{checkValue(financialInfo.totalLiabilities)}</td>
          </tr>
          <tr>
            <Title>Current Cash </Title>
            <Title>Current Debt</Title>
            <Title>Total Cash</Title>
            <Title>Total Debt</Title>
          </tr>
          <tr>
            <td>{checkValue(financialInfo.currentCash)}</td>
            <td>{checkValue(financialInfo.currentDebt)}</td>
            <td>{checkValue(financialInfo.totalCash)}</td>
            <td>{checkValue(financialInfo.totalDebt)}</td>
          </tr>
          <tr>
            <Title>Shareholder Equity </Title>
            <Title />
            <Title />
            <Title>Cash Change </Title>
          </tr>
          <tr>
            <td>{checkValue(financialInfo.shareholderEquity)}</td>
            <td />
            <td />
            <td>{checkValue(financialInfo.cashChange)}</td>
          </tr>
        </table>
      </Wrapper>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(FinancialInfo);

import React from 'react';
import { connect } from  'react-redux';

const CompanyInfo = props => {

    const companyInfo = props.state.company.company;

    return(
        <div className='ui raised segment'>
        <a className={`ui ${props.state.quote.quote.change >= 0 ? 'green' : 'red'} ribbon label`}>About</a>
            <div>{companyInfo.industry}</div>
            <div>{companyInfo.exchange}</div>  
            <div>CEO = {companyInfo.CEO}</div>    

            <div className="ui divider"></div>
            <div>{companyInfo.description}</div>
            <a target='_blank'href={companyInfo.website}>Visit their Website</a>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(CompanyInfo);
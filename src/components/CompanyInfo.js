import React from 'react';
import { connect } from  'react-redux';

const CompanyInfo = props => {

    const companyInfo = props.state.company.company;

    return(
        <div className='ui segment'>
            <ul>
                <li>Company Name = {companyInfo.companyName}</li>
                <li>exchange = {companyInfo.exchange}</li>
                <li>industry = {companyInfo.industry}</li>
                <li>website = {companyInfo.website}</li>
                <li>description = {companyInfo.description}</li>
                <li>CEO = {companyInfo.CEO}</li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(CompanyInfo);
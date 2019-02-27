import React from 'react';
import { connect } from  'react-redux';
import './style/CompanyInfo.css';

const CompanyInfo = props => {

    const companyInfo = props.state.company.company;

    return(
        <div className='ui raised companyinfo segment'>
            <div className={`ui black ribbon label`}>About</div>
            <div className='center'>
                <div>{companyInfo.industry}</div>
                <div>{companyInfo.exchange}</div>  
                <div>CEO: {companyInfo.CEO}</div>    
                <a target='_blank'href={companyInfo.website}>Visit their Website</a> 
            </div>
            <div className="ui divider"></div>
            <div>{companyInfo.description}</div>
        </div>
    )
};

const mapStateToProps = state => {
    return { state: state };
}

export default connect(mapStateToProps)(CompanyInfo);
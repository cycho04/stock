import React from 'react';
import { connect } from  'react-redux';
import styled from 'styled-components';


const Banner = styled.div`
    color: black !important;
    padding-top: 6.0em;
    padding-bottom: 2.0em;
`

const CenteredText = styled.div`
    text-align: center;
    color: black !important;
`

const Wrapper = styled.div`
    background-color: transparent !important;
    border: none !important;
    margin-top: 1.0em !important;
`

const CompanyInfo = ( { companyInfo } ) => {
    return(
        <div>
            <Banner className='ui horizontal divider'>
                <h2>ABOUT</h2>
            </Banner>
            <Wrapper>
                <CenteredText>
                    <div>{companyInfo.industry}</div>
                    <div>{companyInfo.exchange}</div>  
                    <div>CEO: {companyInfo.CEO}</div>    
                    <a target='_blank'href={companyInfo.website}>Visit their Website</a> 
                </CenteredText>
                <CenteredText className='center'>{companyInfo.description}</CenteredText>
            </Wrapper>    
        </div>
    )
};

const mapStateToProps = state => {
    return { 
        companyInfo: state.company.company 
    };
}

export default connect(mapStateToProps)(CompanyInfo);
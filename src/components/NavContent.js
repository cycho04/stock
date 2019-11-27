import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


const StyledContainer = styled(Container)`
    padding-top: 1rem;
`
const StyledTextField = styled(TextField)`
    width: 100%;
`


const NavContent = () => {
    return(
        <StyledContainer maxWidth='xl'>
             <StyledTextField id="outlined-basic" label="Search" variant="outlined" />
             <h2>Table of Contents</h2>

             <h3>Stock Time Series</h3>
             <h4>Intraday</h4>
             <h4>Daily</h4>
             <h4>Daily Adjusted</h4>

             <h3>Technical Indicators</h3>
             <h4>Simple Moving Avg</h4>
             <h4>Exponential Moving Avg</h4>
             <h4>Volume Weighted Avg Price</h4>
        </StyledContainer>
    )
}

export default NavContent;
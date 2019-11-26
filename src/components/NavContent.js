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
        </StyledContainer>
    )
}

export default NavContent;
import React from 'react';
import styled from 'styled-components';
import NavContent from './NavContent';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {device} from '../styles/media';

const StyledAppBar = styled(AppBar)`
    height: 4rem;
    padding: 1rem;
    @media ${device.tablet}{
        display: none;
    }
`
const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2rem;
`
const StyledDrawer = styled(Drawer)`
    & > .MuiPaper-root {
        min-width: 240px;
        width: auto;
    }
`
const StyledWrapper = styled.div`
    width: 100%;
    @media ${device.tablet}{
        display: none;
    }
`
const StyledPermDrawer = styled(Drawer)`
    background-color: blue;
    display: none;
    @media ${device.tablet}{
        display: flex;
        min-width: 240px;
    }
`

const NavBar = () => {
    //hooks for local state
    const [state, setState] = React.useState({
        open: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
    };

    return(
        <>
            {/* Mobile */}
            <StyledWrapper>
                <StyledAppBar position="static">
                    <StyledIcon icon={faBars} onClick={toggleDrawer('open', true)}/>
                </StyledAppBar>
                <StyledDrawer open={state.open} onClose={toggleDrawer('open', false)}>
                    <NavContent />
                </StyledDrawer>
            </StyledWrapper>

            {/* Desktop */}
            <StyledPermDrawer
                variant="permanent"
                anchor="left"
            >
                <NavContent />
            </StyledPermDrawer>
        </>
    )
}

export default NavBar;
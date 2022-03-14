import React, { useState,useContext} from "react";
import styled,{ThemeContext} from "styled-components";
import { NavLink } from "react-router-dom";
import {Toggle} from './Toggle'

const HeaderWrapper = styled.header`
    height:60px;
    width:100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top:0;
    background-image: linear-gradient(to right,${p=>p.theme.primaryColor},${p=>p.theme.secondaryColor});
    border-bottom:3px solid ${p=>p.theme.secondaryColor};
`
const Menu = styled.nav`
    display:${p=>p.open?'block':'none'};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top:60px;
    left:0;
    padding:8px;
    box-sizing: border-box;
    border-bottom:3px solid ${p=>p.theme.secondaryColor};
    background:${p=>p.theme.bodyBackgroundColor};

    @media(min-width: 768px){
        display:flex;
        background: none;
        left:initial;
        top:initial;
        margin: auto 0 auto auto;
        border-bottom: none;
        position:relative;
        width:initial;
    }
`;

// const Link = ({ isActive, children, ...props }) => {
//     return (
//         <RRDLink {...props}>
//             {children}
//         </RRDLink>
//     )
// }

const StyledLink = styled(NavLink)`
    padding: 4px 8px;
    display:block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    color:${p=>p.theme.bodyFontColor};
    &.active {
        font-weight: bold;
    }
`

const MobileMenuIcon = styled.div`
    margin:auto 0 auto auto;
    width:25px;
    min-width: 25px;
    padding: 5px;
    >div{
        height:3px;
        background: ${p=>p.theme.bodyFontColor};
        margin: 5px 0;
        width: 100%;
    }
    @media (min-width: 768px){
        display:none;
    }
`


export const Header = () => {
    // const {pathname} = useLocation();
    const [menuOpen,setMenuOpen] = useState(false);
    const {id,setTheme} = useContext(ThemeContext)
    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={()=>setMenuOpen(prevState=>!prevState)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to='/' exact>
                    Home
                </StyledLink>
                <StyledLink to='/Login' exact>
                    Login
                </StyledLink>
                <StyledLink to='/Potato' exact>
                    Potato
                </StyledLink>
                <Toggle isActive={id==='dark'} onToggle={setTheme} />
            </Menu>
        </HeaderWrapper>
    )
}
import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarcon = styled.div`
display: grid;
grid-template-columns: 2fr 2fr  1fr 1fr 2fr;
height: 75px;
width: 100% ;
background: blue;
`
const Logo = styled.div`
display: flex;
justify-content:center;
align-items:center;
color: white;
font-size: 3em;
font-weight: bold;
`

const NavLinks = styled.a`
display: flex;
justify-content:center;
align-items:center;
color: white;
font-size: 1em;
border-left: solid 1px;
`

class Navbar extends Component {
    render() {
        return (
            <NavBarcon>
                <Logo>
                    Belmont Palace
            </Logo>
                <div>
                </div>

                <NavLinks as="a" href="/">Home</NavLinks>
                <NavLinks as="a" href="/tenant">Add Tenant</NavLinks>
                <NavLinks as="a" href="/">Create A WorkOrder</NavLinks>
            </NavBarcon>
        );
    }
}

export default Navbar;
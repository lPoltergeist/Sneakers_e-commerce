import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.svg'
import { List, X } from 'phosphor-react'

import Cart from '../Cart/Cart';
import SideBar from './SideBar'

const Navbar = () => {
 
  return (
    <Container>
        <NavContainer>
        <NavMenu>
         
          <SideBar />
            <NavLogo>
                <img src={Logo} alt="logo"/>
            </NavLogo>
                <NavRoutes>
                <NavRoute>
                    Collection
                </NavRoute>
                </NavRoutes>

                <NavRoutes>
                <NavRoute>
                    Men
                </NavRoute>
                </NavRoutes>

                <NavRoutes>
                <NavRoute>
                    Women
                </NavRoute>
                </NavRoutes>

                <NavRoutes>
                <NavRoute>
                    About
                </NavRoute>
                </NavRoutes>

                <NavRoutes>
                <NavRoute>
                    Contact
                </NavRoute>
                </NavRoutes>
            </NavMenu>

            <CartLoginContainer>
            <Cart />
            </CartLoginContainer>
        </NavContainer>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
height: 80px;
border-bottom: 2px solid #dfdfdf;
margin: 2rem 0;
align-items: center;
@media screen and (max-width: 920px) {
  margin: 1rem 1rem 0 1rem;
  height: 40px;
}
`

const NavContainer = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;

`

const NavLogo = styled.div`
margin-right: 2rem;
`

const NavMenu = styled.div`
display: flex;

`

const NavRoutes = styled.div`
height: 79px;
width: fit-content;
transition: ease-in 0.1s;
cursor: pointer;

&:hover{
  border-bottom: 5px solid #FF7518;
}
@media screen and (max-width: 920px) {
  display: none;
}
`

const NavRoute = styled.a`
margin: 0 1rem;
font-size: 1.2rem;
color: gray;
cursor: pointer;

&:hover{
  color: #000;
}
`

const CartLoginContainer = styled.div`
vertical-align: top;
display: flex;
width: 100px;
margin-bottom: 3rem;

@media screen and (max-width: 920px) {
  margin-bottom: 0 ;
}

.box2{
margin: 0 auto;
}

img {
  height: 50px
}
`

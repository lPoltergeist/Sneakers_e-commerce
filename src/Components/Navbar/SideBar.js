import React, {useState, useEffect} from 'react'
import { X, List} from 'phosphor-react'

import styled from 'styled-components';

const SideBar = () => {

  const [Open, setOpen] = useState(false);
  const HandleMenu = () => setOpen(!Open);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
});

useEffect(() => {
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  if (size.width > 920 && Open) {
    setOpen(false);
  }
}, [size.width, Open]);

  return (
    <Container>
    <List onClick={HandleMenu} side={30} color="gray"/>
    <SideBarContainer Open={Open}>
        <SideBarMenu>
            <X className="CloseMenu" onClick={HandleMenu} side={30} color="gray" />
            <MenuLink>
                Collection
            </MenuLink>
            <MenuLink>
                Men
            </MenuLink>
            <MenuLink>
                Women
            </MenuLink>
            <MenuLink>
                About
            </MenuLink>
            <MenuLink>
                Contact
            </MenuLink>
        </SideBarMenu>
    </SideBarContainer>
    </Container>
  )
}

export default SideBar;

const Container = styled.div`

svg {
    font-size: 25px;
  margin: 0 2rem;

  @media screen and (min-width: 920px) {
    display: none;
  }};`

const SideBarContainer = styled.div`
height: 100vh;
width: 250px;
background-color: #f2f2f2;
border-right: 1px solid gray;
box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.3);
z-index: 999;
display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: ${({ Open }) => (Open ? '0' : '-100%')};
  transition: 350ms;
`

const SideBarMenu = styled.span`
margin: 1.5rem 0 0 2rem;

.CloseMenu {
    margin: 0 0 3rem -0.2rem;
    display: flex;
    justify-content: flex-start;
}
`

const MenuLink = styled.div`
font-size: 1.3rem;
font-weight: 700;

cursor: pointer;

:nth-child(n+2) {
    margin-top: 1rem;
}

:after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: #FF7518;
  transition: 300ms;
}

:hover:after {
  width: 100%
}
`
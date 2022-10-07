import React from 'react'
import styled from 'styled-components'
import { ShoppingCart } from 'phosphor-react'

const Button = (props) => {
  return (
    <AddToCart ButtonSize={props.Size}> 
        {props.Icon ? <ShoppingCart size={20} /> : null}
         {props.ButtonName}
         </AddToCart>
  )
}

export default Button

const AddToCart = styled.button`

width:  250px;
height: 50px;
background-color: #FF7518;
border: none;
border-radius: 10px;
font-size: 1.5rem;
font-weight: 700;
color: #fff;
margin-left: 2rem;
transition: 0.1s ease-in;
box-shadow: 0 2px 20px rgba(0,0,0,0.2);

@media screen and (max-width: 1400px) {
    margin: 1rem 0 0 0;
}

&:hover {
    background-color: orange;
}

`
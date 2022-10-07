import React,{useState} from 'react'
import styled from 'styled-components'
import ProfileImg from '../../images/image-avatar.png'
import {ShoppingCart} from 'phosphor-react';
import CartListBox from './CartList';
import { useContext } from 'react';
import { CartContext} from '../../Context/Cart';

const Cart = (products) => {
const {ProductQuantity} = useContext(CartContext)

  const [CartIsOpen, setCartIsOpen] = useState(false)
  const CartIs = () => setCartIsOpen(!CartIsOpen)

  const cartItems = products;

  return (
    <>
    <ProductsNumber onClick={CartIs}>{ProductQuantity}</ProductsNumber>
  
    <ShoppingCart size={20} onClick={CartIs} />
    
    {CartIsOpen && <CartBox >
      <Box><span>Cart</span></Box>
     <CartListBox items={cartItems}/>
      </CartBox> }
    </>
  )
}

export default Cart;

const ProductsNumber = styled.div`
user-select:none;
position: absolute;
background-color: orange;
border-radius: 5px;
width: 15px;
height: 13px;
right: 10rem;
top: 2.2rem;
display: flex;
cursor: pointer;
justify-content: center;
;


@media screen and (max-width: 920px) {
  right: 6rem;
  top: 1rem;
}
;

font-size: 0.8rem;
color: #f2f2f2;
font-weight: 700;`

const CartBox = styled.div`
user-select:none;
background-color: #f2f2f2;
z-index: 99;
right: 4rem;
top: 6rem;
width: 300px;
min-height: 150px;
position: absolute;
border-radius: 10px;
box-shadow: 0 2px 20px rgba(0,0,0,0.2);

`

const Box = styled.div`
border-bottom: 2px solid #dfdfdf;
height: 40px;
display: flex;
span{
    margin: 10px 0 0 20px;
    font-size: 1.2rem;
    font-weight: 700;
}
`



const EmptyBox = styled.div`
padding-top: 2.5rem;
margin: auto;
font-size: 1.1rem;
font-weight: 700;
color: gray;`



const CheckOutButton = styled.button`
margin: 1rem 0 0 0;
border: none;
background-color: #FF7518;
width: 100%;
height: 40px;
border-radius: 5px;
color: #f2f2f2;
font-size: 1.1rem;
transition: 0.1s ease-in;
box-shadow: 0 2px 20px rgba(0,0,0,0.2);
cursor: pointer;

&:hover {
    background-color: orange;
}
`;
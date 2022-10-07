import React,{useState} from 'react'
import styled from 'styled-components';
import Sneaker from '../../images/image-product-1.jpg'
import {ShoppingCart, Trash} from 'phosphor-react';
import { useContext } from 'react';
import { CartContext, CartProvider } from '../../Context/Cart';

const CartListBox = () => {
  const {cartItems, ProductQuantity} = useContext(CartContext);
  const finalPrice = 125*ProductQuantity;

  const [productOnCart, setproductOnCart] = useState(cartItems.length);

  const handleRemove = () => setproductOnCart(productOnCart - 1);
  console.log(productOnCart);


  return (
    <ListBox>
     {productOnCart > 0 ? 
     <>
     <CartList>
      <ProductImg><img src={Sneaker}/></ProductImg>
      <Product> 
        <ProductName>
        <span>Fall Limited Edition Sneakers</span>
        </ProductName>
 
        <ProductPrice>
          $125 x {ProductQuantity} = {finalPrice}
        </ProductPrice>
      </Product> 
      <Trash onClick={handleRemove} size={21} color="gray" /> 
      </CartList>
      
      <CheckOutButton>Checkout</CheckOutButton>
    
      </>
      : <EmptyBox>
        <Box>
          <span>Your cart is empty</span>
        </Box>
      </EmptyBox>
     } 

    </ListBox>
  )
}

export default CartListBox;

const CartList = styled.div`
margin: 1rem 2rem;
display: flex;
justify-content: space-between;
`

const ListBox = styled.div`
justify-content: space-between;
align-items: center;

svg {
  cursor: pointer;
}
`

const Product = styled.div`

`

const ProductImg = styled.div`
img {
  border-radius: 10px;
  margin-right: 1rem;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}
`

const ProductName = styled.div`
 white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  font-size: 0.9rem;
`

const ProductPrice = styled.div`
font-size: 0.8rem;
`

const ButtonBox = styled.div`

justify-content: center;
margin: 0 0 1rem 6rem;
`

const CheckOutButton = styled.button`
margin: 0 0 1rem 2rem;
border: none;
background-color: #FF7518;
width: 80%;
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

const EmptyBox = styled.div`
display: flex;
margin: auto;
`

const Box = styled.div`
display: flex;
margin: auto;
margin-top: 2.5rem; 
span {
  font-size: 1.2rem;
  color: gray;
}`

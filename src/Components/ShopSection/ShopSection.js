import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ProductData from '../ProductData'

import {Minus, Plus, ShoppingCart} from 'phosphor-react';
import ProductImageSection from './ProductImageSection';
import Cart from '../Cart/Cart';
import { CartContext, CartProvider } from '../../Context/Cart';


const ShopSection = () => {
        const { AddCart, ProductQuantity, RemoveCart, handleAddToCart} = useContext(CartContext)

  return (

   <ShopContainer>
   <div className="cart">
    <Cart/>
   </div>

   <div className="ContainerBox">
    <div className="box">
 <div className="box2">
 <ProductImageSection/>
        <ProductInformation>
            {ProductData.map(data => ( 
                <>
                <Brand key={data.id}>
                {data.brand}
                </Brand>
                <SneakerModel>
                {data.model}
                </SneakerModel>
    
                <ProductDescription>
                {data.description}
                </ProductDescription>
                
                 <Price>
                    ${data.price} <DiscountValue> {data.discountValue}%</DiscountValue>
                </Price>
                <Discount>
                   {data.discount}
                </Discount>
                 
                </>
            ))}

            <BuySection>
                <QuantityBox>
                <Quantity>
                <Minus size={20}  onClick={ProductQuantity === 0 ? null : RemoveCart} color="#FF7518"/> <span>{ProductQuantity}</span> <Plus size={20} onClick={AddCart} color="#FF7518"/>
                </Quantity>
                </QuantityBox> 

                <AddToCart onClick={ProductQuantity > 0 ? handleAddToCart : null}> 
        <ShoppingCart size={20}/>
         Add to cart
         </AddToCart>
            </BuySection>
         
        </ProductInformation>
 </div>
   </div>
   </div>
   </ShopContainer>
  )
}

export default ShopSection

const ShopContainer = styled.div`
margin: 5rem;
height: 80vh;
@media screen and (max-width: 920px) {
  margin: 0;
}

.cart{
    display: none;
}

.ContainerBox {
    margin: 0 auto;
    display: flex;

}

.box {
    margin: 0 auto;
    display: flex;
}

.box2{
    margin: 0 auto;
    display: flex;
    @media screen and (max-width: 920px) {
  display: block;
  margin: 0;
}
}
`

const ProductInformation = styled.aside`
max-height: 600px;
max-width: 500px;
min-width: 250px;

@media screen and (max-width: 920px) {
display: block;
justify-content: center;
align-items: center;
  margin: 1rem;
}
`

const Brand = styled.h3`
color: #FF7518;
margin-top: 3rem;

`

const SneakerModel = styled.h1`
margin: 2rem 0;
font-size: 3vw;
@media screen and (max-width: 900px) {
    font-size: 5vw;
}

`

const ProductDescription = styled.div`
color: gray;
font-size: 100%;
text-align: justify;

@media screen and (max-width: 900px) {
    font-size: 100%;
}
`

const Price = styled.div`
display: flex;
margin-top: 2.5rem;
font-size: 2vw;
font-weight: 700;

align-items: center;
`

const DiscountValue = styled.div`
background-color: rgba(255, 118, 89, 0.1);
width: max-content;
margin: 0 1rem;
font-size: 1rem;
color: #FF7518;

`

const Discount = styled.div`
margin: 0.5rem 0;
font-size: 1rem;
color: gray;
text-decoration: line-through;
`

const BuySection = styled.div`
margin: 1.5rem 2rem;
display: flex;
float: right;

@media screen and (max-width: 1400px) {
    display: inline;
   
};
`

const QuantityBox = styled.div`
  user-select:none;
display: flex;
align-items: center;
margin: 0 auto;
 cursor: pointer;
@media screen and (max-width: 1400px) {
    max-width:250px;
display: block;
justify-content: space-between;
}

`

const Quantity = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-width: 150px;

span {
    font-weight: 700;
    font-size: 1.5rem;
}
`

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

&:active {
    background-color: #FF7518;
}

`





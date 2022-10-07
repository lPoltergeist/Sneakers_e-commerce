import React from 'react'
import styled from 'styled-components'
import Sneaker4 from '../../images/image-product-4.jpg'

const Modal = ({SelectedImg}) => {
  return (
    <Container>
    <ModalImg>
        <img src={Sneaker4} />
        </ModalImg>
        </Container>
  )
}

export default Modal

const Container = styled.div`
width: 100vw;`

const ModalImg = styled.div`
background-color: black;
z-index: 99;
bottom: 45rem;
left: 15rem;
position: relative;

img{
    width: 100%;
}
`
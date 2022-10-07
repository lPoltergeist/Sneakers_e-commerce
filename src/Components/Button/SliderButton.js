import React from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import styled from 'styled-components'

const SliderButton = ({direction, moveSlide}) => {

  return (
    <Button onClick={moveSlide} className={direction === "next" ? "next" : "prev"} >
    {direction === "next" ? <CaretRight size={20} color="black" /> : <CaretLeft size={20} color="black" />}
</Button>
  )
}

export default SliderButton

const Button = styled.button`
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  opacity: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

svg {
  width: 25px;
  height: 25px;
  pointer-events: none;

  :hover{
    width: 30px;
  height: 30px;
  }
}

.prev {
  top: 50%;
  left: 20px;
  transform: translateY(-60%);
}
.next {
  top: 50%;
  right: 20px;
  transform: translateY(-60%);
}
`
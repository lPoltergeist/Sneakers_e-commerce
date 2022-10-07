import React, { useState } from 'react'
import styled from 'styled-components'
import dataSlider from '../dataSlider';
import Sneaker from '../../images/image-product-1.jpg'
import Sneaker2 from '../../images/image-product-2.jpg'
import Sneaker3 from '../../images/image-product-3.jpg'
import Sneaker4 from '../../images/image-product-4.jpg'
import SliderButton from '../Button/SliderButton';


const ProductImageSection = () => {
    const [SelectedImg, setSelectedImg] = useState(Sneaker)
    
    const [sliderIndex, setSliderIndex] = useState(1);

    const nextSlide = () => {
        if(sliderIndex !== dataSlider.length){
            setSliderIndex(sliderIndex + 1)
        } else if ( sliderIndex === dataSlider.length) {
            setSliderIndex(1);
        }
    }

    const previousSlide = () => {
        if(sliderIndex !== 1){
            setSliderIndex(sliderIndex - 1)
        } else if ( sliderIndex === 1) {
            setSliderIndex(4);
        }
    }

  return (
  <>
  <ContainerSlider>
    {dataSlider.map((obj, index) => {
        return (
            <Carousel key={obj.id} className={sliderIndex === index + 1 ? "active-anim" : null} >
                <img src={obj.image} />
            </Carousel>
        )
    })}
    <SliderButton moveSlide={nextSlide} direction={"next"}/>
    <SliderButton moveSlide={previousSlide} direction={"previous"}/>
    </ContainerSlider>
  
 
    <ProductsImg>
   
   
    <img onClick={() => setClickedImg(SelectedImg)} className="FocusImg" src={SelectedImg} alt='ProductPhoto'/>
    
  
    <ImagesSelecion>
    <img onClick={() =>  setSelectedImg(Sneaker)} src={Sneaker} />
    <img onClick={() => setSelectedImg(Sneaker2)} src={Sneaker2} />
    <img onClick={() => setSelectedImg(Sneaker3)} src={Sneaker3} />
    <img onClick={() => setSelectedImg(Sneaker4)} src={Sneaker4} />
    </ImagesSelecion>
    </ProductsImg>
    </>
  )
}

export default ProductImageSection

const ContainerSlider = styled.div`
  max-width: 700px;
  height: 50vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 920px){
  display: none;
  }

.active-anim {
  opacity: 1;
}

.btn-slide {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn-slide img {
  width: 25px;
  height: 25px;
  pointer-events: none;
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


.container-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
}
.dot.active {
  background: rgb(32, 32, 32);
}
`

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;

img {
    border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 720px) {
        border-radius: 0;
    }
}
`;

const ProductsImg = styled.div`
max-width: 700px;

@media screen and (max-width: 920px) {
        display: none;
    }

.FocusImg {
    width: 75%;
    height: auto;
    border-radius: 20px;
    min-height: 300px;
    min-width: 300px;
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
`

const ImagesSelecion = styled.div`
    margin: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    max-width: 70%;
    @media screen and (max-width: 1100px) {
        max-width: 70%;
    }
    
img {
    width: 20%;
    height: auto;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
}

`

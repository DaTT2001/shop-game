import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderMain from './SlideMain.module.css'

const SliderMain = () => {
  return (
    <Carousel>
        <Carousel.Item interval={3500}>
          <img
            className={"d-block " + sliderMain.sliderImg}
            src='/images/destiny2.webp'  
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className={"d-block " + sliderMain.sliderImg}
            src='/images/the great war.webp'  
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className={"d-block " + sliderMain.sliderImg}
            src='/images/the last of us.webp'  
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className={"d-block " + sliderMain.sliderImg}
            src='/images/hogwart.webp'  
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className={"d-block " + sliderMain.sliderImg}
            src='/images/returnal.jpg'  
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  )
}

export default SliderMain
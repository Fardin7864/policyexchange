"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/eventCarosel.css';
import {Container} from '@mui/material';
import { NextArrow, PrevArrow } from './EventCarouselArrows';

const HomeEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
return(
  <div className='  h-[700px]'>
  <Container className=' my-20 rounded-xl'>
  <Slider {...settings}>
    <div className="carousel-item h-full border-2 border-black" >
      <img src="/client/2.jpg" alt="Slide 1" className=' h-1/2'/>
    </div>
    <div className="carousel-item">
      <img src="/client/3.jpg" alt="Slide 2"  className='' />
    </div>
    <div className="carousel-item">
      <img src="/client/client.jpg" alt="Slide 3"  className=''/>
    </div>
    {/* Add more slides as needed */}
  </Slider>
</Container>
  </div>
);
}

export default HomeEvents;

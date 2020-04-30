import React, { Component } from 'react';


import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import '../App.css'


const Clients = () => {
  return (

    <>
      <CarouselProvider
        totalSlides={10}
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        infinite={true}
        isPlaying={true}
        orientation={'horizontal'}
        playDirection={'forward'}
      >


        <Slider>

          <Slide id='cc-img' index={0}>
            <Image src={require("../images/1200px-Laing_O'Rourke_logo.svg.png")} />
          </Slide>

          <Slide index={1}>
            <Image id='cc-img' src={require('../images/1280px-Workspace_Group_logo.svg.png')} />
          </Slide>

          <Slide index={2}>
            <Image id='cc-img' src={require("../images/mediacitylogo.png")} />
          </Slide>

          <Slide index={3}>
            <Image id='cc-img' src={require('../images/Ikea_logo.svg')} />
          </Slide>

          <Slide index={4}>
            <Image id='cc-img' src={require('../images/download (2).png')} />
          </Slide>

          <Slide index={5}>
            <Image id='cc-img' src={require('../images/download.png')} />
          </Slide>

          <Slide index={6}>
            <Image id='cc-img' src={require('../images/manchester-cathedral-logo.jpg')} />
          </Slide>

          <Slide index={7}>
            <Image id='cc-img' src={require("../images/Bentley-symbol-black-1920x1080.png")} />
          </Slide>

          <Slide index={8}>
            <Image id='cc-img' src={require('../images/1280px-Audi_logo_detail.svg.png')} />
          </Slide>

          <Slide index={9}>
            <Image id='cc-img' src={require("../images/junkyard-golf-club-2019-e1575031027320.jpg")} />
          </Slide>



        </Slider>

      </CarouselProvider>
    </>
  );
}
export default Clients;
import React, { Component } from 'react'
import {Animated} from "react-animated-css";
 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carouseel extends Component {
  render() {
    return (
      <div>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div>
                hello world 
            </div>
        </Animated>
        <Carousel className="container ml-5 mr-5 col-6" >
                <div>
                    <img style={{width:"50px",height:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4x39Bskju3P3KAJZzo4cMpf7dtZw5l02i87nHFHu04Z6B7fXq" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img style={{width:"50px",height:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4x39Bskju3P3KAJZzo4cMpf7dtZw5l02i87nHFHu04Z6B7fXq" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img style={{width:"50px",height:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4x39Bskju3P3KAJZzo4cMpf7dtZw5l02i87nHFHu04Z6B7fXq" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={5}
        totalSlides={3}
      >
        <Slider>
          <Slide index={1}>I am the first Slide.</Slide>
          <Slide index={0}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack className="btn">Back</ButtonBack>
        <ButtonNext className="btn">Next</ButtonNext>
      </CarouselProvider>
      </div>
    )
  }
}

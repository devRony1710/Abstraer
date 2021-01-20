import React from 'react';
import { Component } from 'react';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Arrow/nextArrow.css';

import Slider from 'react-slick';

import nextarrow from '../../assets/arrow.png';
import prevArrow from '../../assets/arrow.png';

import Slide1 from '../../assets/slide-1.jpg';
import Slide2 from '../../assets/slide-2.jpg';
import Slide3 from '../../assets/slide-3.jpg';

export default class MainSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      prevArrow: <img alt="Arrow" src={prevArrow} />,
      nextArrow: <img alt="Arrow" src={nextarrow} />,
    };
    return (
      <>
        <Slider {...settings}>
          <img alt="slide" src={Slide1} />
          <img alt="slide" src={Slide2} />
          <img alt="slide" src={Slide3} />
        </Slider>
      </>
    );
  }
}

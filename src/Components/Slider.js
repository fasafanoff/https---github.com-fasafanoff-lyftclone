import React  ,{ useRef } from 'react';
import "./Slider.css";
import Slider from "react-slick";
import SliderArrow from './SliderArrow';
const SliderPhone = ({ paragraph,Step }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    afterChange: (position) => {
      Step.current.innerText = `Step ${position + 1}`;
      paragraph.current.innerText = links[position].p;
    },
    className: "slides",
  };
  const links = [
    {
      link: "https://cdn.lyft.com/brochure/walkthrough-01.9c976d70.jpg",
      p: "Open the app and turn on driver mode.",
    },
    {
      link: "https://cdn.lyft.com/brochure/walkthrough-02.b114d8ac.jpg",
      p: "Accept a ride request.",
    },
    {
      link: "https://cdn.lyft.com/brochure/walkthrough-03.a93183c0.jpg",
      p: "Pick up your passenger.",
    },
    {
      link: "https://cdn.lyft.com/brochure/walkthrough-04.e7e7d194.jpg",
      p:
        "Once the ride ends, the app processes pay from the passenger’s saved credit card.",
    },
  ];

  const slider = useRef(null);

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__inner">
          <div className="slider__blank"></div>
          <SliderArrow
            onClick={() => {
              slider.current.slickPrev();
            }}
            isLeft={true}
          ></SliderArrow>
          <div className="slider__slider">
            <div className="slider__phone">
              <Slider {...settings} ref={slider}>
                {links.map((link, index) => (
                  <div className="guide__item">
                    <img src={link.link} className="slider__image" alt={ link.p}/>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <SliderArrow
            onClick={() => {
              slider.current.slickNext();
            }}
            isLeft={false}
          ></SliderArrow>
        </div>
      </div>
    </div>
  );
};

export default SliderPhone;

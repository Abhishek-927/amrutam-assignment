import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./sliderBox.css";

const SliderBox = () => {
  function SampleNextArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="first-slider">
        <div className="heading-s">
          <p className="heading-t">Our ayurvedic approach</p>
          <p className="desc-t">
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert practitioners begin each treatment process by conducting
            a thorough analysis of the patient’s body type, medical history, and
            current health conditions.
          </p>
        </div>
        <div className="container">
          <Slider {...settings}>
            <div className="items col-md-3">
              <div className="in-item">
                <div className="mid-round">1</div>
                <div className="item-text">
                  <p className="it-title">Make Appointment</p>
                  <p className="it-desc">
                    You must make an appointment in advance, to choose the
                    service and date.
                  </p>
                </div>
              </div>
            </div>
            <div className="items col-md-3">
              <div className="in-item">
                <div className="mid-round">2</div>
                <div className="item-text">
                  <p className="it-title">Make Appointment</p>
                  <p className="it-desc">
                    You must make an appointment in advance, to choose the
                    service and date.
                  </p>
                </div>
              </div>
            </div>
            <div className="items col-md-3">
              <div className="in-item">
                <div className="mid-round">3</div>
                <div className="item-text">
                  <p className="it-title">Make Appointment</p>
                  <p className="it-desc">
                    You must make an appointment in advance, to choose the
                    service and date.
                  </p>
                </div>
              </div>
            </div>
            <div className="items col-md-3">
              <div className="in-item">
                <div className="mid-round">4</div>
                <div className="item-text">
                  <p className="it-title">Make Appointment</p>
                  <p className="it-desc">
                    You must make an appointment in advance, to choose the
                    service and date.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderBox;

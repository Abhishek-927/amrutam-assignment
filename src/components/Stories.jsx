import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card2 from "./Card2";

const Stories = () => {
  function SampleNextArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="story">
        <div>
          <p className="heading-t">STORIES FROM OUR VALUED CUSTOMERS!</p>
        </div>
        <div className="container " style={{ paddingBlock: "4vw" }}>
          <Slider {...settings}>
            <Card2 />
            <Card2 />
            <Card2 />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Stories;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from "./Card";

const Experts = () => {
  function SampleNextArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <div className="py-5">
      <div>
        <div className="heading-t">Meet our Ayurveda experts </div>
      </div>

      <div className="container " style={{ paddingBlock: "4vw" }}>
        <Slider {...settings}>
          <Card
            name="Dr. Vaishali Sharma"
            education="Ayurveda Practioner (BAMS, MD)"
            experience="25 year of experience"
            special="skin specialist"
          />
          <Card
            name="Dr. Vaishali Sharma"
            education="Ayurveda Practioner (BAMS, MD)"
            experience="25 year of experience"
            special="skin specialist"
          />
          <Card
            name="Dr. Vaishali Sharma"
            education="Ayurveda Practioner (BAMS, MD)"
            experience="25 year of experience"
            special="skin specialist"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Experts;

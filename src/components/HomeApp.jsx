import React from "react";
import "./homeApp.css";

import google from "../assets/google-play.png";
import apple from "../assets/apple-play.png";
import moblie from "../assets/mobile.png";

const HomeApp = () => {
  return (
    <>
      <div className=" home-app">
        <div className="row container-xl">
          <div className="text-section col-md-6">
            <div className="text-desc">
              <p className="app-title heading-t">Amrutam home App</p>
              <p className="app-desc">
                The Amrutam Home App is your one-stop app for all things
                Ayurveda! Apart from mimicking the significant characteristics
                of our website, this app offers a wide range of additional
                features.
              </p>
            </div>
            <p className="mini-title">
              Get a diet & lifestyle consultation with ayurvedic experts across
              the globe{" "}
            </p>
            <div className="img-text-box ">
              <p className="img-text">Get The App Now</p>
              <div className="btn-img">
                <img src={google} alt="g-play" />
                <img src={apple} alt="a-play" />
              </div>
            </div>
          </div>
          <div className="images col-md-6">
            <div className="circle"></div>
            <div className="circle"></div>
            <img src={moblie} alt="moblie" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeApp;

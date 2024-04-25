import React from "react";
import "./discover.css";

import ribbon from "../assets/ribbon.svg";
import strong from "../assets/strong.png";
import aukhli from "../assets/aukhli.png";
import flower from "../assets/flower.png";
import heartbeat from "../assets/heartbeat.png";
import girl from "../assets/girl.png";
import plusSign from "../assets/plusSign.png";
import namaste from "../assets/namaste.png";

const Discover = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <p className="heading-t">Discover Ayurveda’s magic with us</p>
          <p className="desc-t">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It's like a journey to better health using
            ancient wisdom, a totally effective approach for a better life.{" "}
          </p>
        </div>
        <div className="row second-row">
          <div className="col-lg-3 col-md-6 col-sm-6 text-end">
            <div className="item">
              <div className="text">
                <p className="title">Personalized Wellness</p>
                <p>
                  Get treatments made just for you based on your individual
                  doshas ( body type)
                </p>
              </div>
              <div className="big-round" style={{ backgroundColor: "#edf5fa" }}>
                <img src={heartbeat} alt="plus" />
              </div>
            </div>
            <div className="item">
              <div className="text">
                <p className="title">Focus on prevention </p>
                <p>Stop problems even before they start.</p>
              </div>
              <div className="big-round" style={{ backgroundColor: "#eaf2ea" }}>
                <img src={ribbon} alt="plus" />
              </div>
            </div>
            <div className="item">
              <div className="text">
                <p className="title">Mind-Body Connection</p>
                <p>Keep your mind and body in sync for a happy life.</p>
              </div>
              <div className="big-round" style={{ backgroundColor: "#fcf1f1" }}>
                <img src={namaste} alt="plus" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="center-img">
              <img src={flower} alt="" />
              <img className="girl-img" src={girl} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-start">
            <div className="item">
              <div className="big-round" style={{ backgroundColor: "#f5f3fc" }}>
                <img src={plusSign} alt="plus" />
              </div>
              <div className="text">
                <p className="title">Holistic Healing </p>
                <p>Fix the root problem for long-lasting health.</p>
              </div>
            </div>
            <div className="item">
              <div className="big-round" style={{ backgroundColor: "#fef6ed" }}>
                <img src={aukhli} alt="plus" />
              </div>
              <div className="text">
                <p className="title">Natural Remedies </p>
                <p>Using herbs and natural therapies for healing.</p>
              </div>
            </div>
            <div className="item">
              <div className="big-round" style={{ backgroundColor: "#eaf2ea" }}>
                <img src={strong} alt="plus" />
              </div>
              <div className="text">
                <p className="title">Boosting immunity</p>
                <p>Stay strong and healthy for life, not just for today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;

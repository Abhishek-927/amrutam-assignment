import React from "react";
import sms from "../assets/speech-bubble.svg";
import letter from "../assets/prescription.svg";
import shield from "../assets/shield.png";
import docter from "../assets/doctor.png";
import logo from "../assets/logo.png";
import icon from "../assets/manu.svg";

import "./topsection.css";

const TopSection = () => {
  return (
    <>
      <div className="top-container">
        <div className="navbar">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-container">
          <div className="bg-item"></div>
          <div className="bg-item"></div>
          <div className="bg-item-sm"></div>
          <div className="black-on"></div>
          <div className="top-text">
            <p className="small">Namaste. Welcome to Amrutam</p>
            <h1>
              Step into Holistic Healing with <span>Ayurveda</span>
              <br /> Book Consultation With Certified Exprets.
            </h1>
            <div className="top-desc">
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
              Anytime, anywhere.
            </div>
            <button className="green-btn">BOOK AN APPOOINTMENT</button>
          </div>
        </div>

        <div className="top-remain container">
          <div className="more-details row">
            <div className="more-item col-md-3 col-sm-6">
              <div className="round">
                <img src={sms} alt="sms" />
              </div>
              <p>convenient online & In-clinic consultations</p>
            </div>
            <div className="more-item col-md-3 col-sm-6">
              <div className="round">
                <img src={shield} alt="shielld" />
              </div>
              <p>Safe and effective treatment</p>
            </div>
            <div className="more-item col-md-3 col-sm-6">
              <div className="round">
                <img src={docter} alt="doctor" />
              </div>
              <p>Experienced Ayurvedic Practitioners</p>
            </div>
            <div className="more-item col-md-3 col-sm-6">
              <div className="round">
                <img src={letter} alt="letter" />
              </div>
              <p>personalized Treatment Plans & Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;

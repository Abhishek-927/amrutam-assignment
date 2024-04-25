import React from "react";
import "./consul.css";

import sea from "../assets/sea.png";
import hair from "../assets/hair-girl.png";
import medicine from "../assets/medicine.png";

const Consultation = () => {
  return (
    <>
      <div className="con-container">
        <div className="cons-heading">
          <p className="heading-t">What sets Ayurvedic consultations apart?</p>{" "}
        </div>
        <div className="row g-3 container justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="text-item">
              <p className="title">
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
              </p>
              <p className="desc">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
            <img src={hair} alt="girl hair" />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
            <div className="text-item">
              <p className="t-title">precise diagnosis</p>
              <p className="t-desc">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 ">
            <div className="text-item">
              <p className="t-title">Zero side-effects</p>
              <p className="t-desc">
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs 
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
            <img src={medicine} alt="medicine" />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
            <div className="text-item">
              <p className="t-title">Individual Treatment</p>
              <p className="t-desc">
                all Treatments are personalized based on a person's unique
                constitution and health concerns.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
            <img src={sea} alt="back-sea" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;

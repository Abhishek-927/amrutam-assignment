import React from "react";
import "./ready.css";

const Ready = () => {
  return (
    <div className="bg-img">
      {/* there is a little problem in black border */}
      <div className="black-on"></div>
      <div className="in-text">
        <p className="in-title">
          Ready to restore harmony in your mind, body and spirit?
        </p>
        <button className="btn green-btn text-light">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default Ready;

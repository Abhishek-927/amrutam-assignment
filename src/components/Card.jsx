import React from "react";
import girl from "../assets/girl-circle.png";

import "./card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="c-img-box">
          <img src={girl} alt="profile image" className="c-img" />
          <span className="badge bg-dark">4.5 ⭐</span>
        </div>
        <div className="details">
          <p className="name">{props.name}</p>
          <p className="education">{props.education}</p>
          <p className="experience">{props.experience}</p>
          <span className="special">{props.special}</span>
        </div>

        <button className="bot-btn">Book a session</button>
      </div>
    </div>
  );
};

export default Card;

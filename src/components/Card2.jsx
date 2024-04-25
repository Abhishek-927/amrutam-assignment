import React from "react";
import "./card2.css";

const Card2 = () => {
  return (
    <div className="card2">
      <div className="card text-start">
        <p className="c-heading">Consulted for Skin</p>
        <div className="d-flex justify-content-between p-3">
          <div className="s-img-box">
            <div className="img-circle"></div>
            <div className="text-name d-flex">
              <p className="t-name">Sophie Moore </p>
              <p className="t-vanue">Chennai</p>
            </div>
          </div>
          <p className="date">17/02/24</p>
        </div>
        <div className="details">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="quat">“One of a kind service”</p>
          <p className="desc">
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;

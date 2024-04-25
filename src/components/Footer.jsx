import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-center">
        <p className="li-heading">Information</p>
        <ul className="f-links">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Privacy Policy for Mobile Apps </a>
          </li>
          <li>
            <a href="#">Shipping and Return Policy</a>
          </li>
          <li>
            <a href="#">International Delivery</a>
          </li>
          <li>
            <a href="#">For Bussinesses, Hotles and Restors</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

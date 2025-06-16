import React from "react";
import RotatingWord from "./RotatingWord";
import "./LogoHeader.css";
import LogoCropped from "../images/fsg-cropped.png";

const LogoHeader = () => {
  return (
    <div className="logo-header" data-aos="fade-down">
      <img src={LogoCropped} alt="FSG Studio Logo" className="logo-img" />
      <h1 className="logo-text">
        <RotatingWord />
      </h1>
    </div>
  );
};

export default LogoHeader;

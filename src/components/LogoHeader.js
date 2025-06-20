import React from "react";
import RotatingWord from "./RotatingWord";
import "./LogoHeader.css";
import LogoCropped from "../images/fsg-cropped.png";

export default function LogoHeader() {
  return (
    <div className="logo-header">
      <img src={LogoCropped} alt="FSG mark" className="logo-img" />
      <div className="logo-text">
        <RotatingWord />
      </div>
    </div>
  );
}

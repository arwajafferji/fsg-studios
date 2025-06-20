import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import FSGLogo from "../images/fsg-logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/fsg-studios";
  return (
    <nav className={`navbar ${isHome ? "navbar--home" : "navbar--solid"}`}>
      <img src={FSGLogo} alt="FSG Studio Logo" className="logo-img" />
      <ul className="nav-links">
        <li>
          <NavLink to="/fsg-studios" end>
            Home
          </NavLink>
        </li>
        <li className="dropdown">
          <span>Products</span>
          <ul className="dropdown-content">
            <li>
              <NavLink to="/glass">Glass</NavLink>
            </li>
            <li>
              <NavLink to="/tiles">Tiles</NavLink>
            </li>
            <li>
              <NavLink to="/fencing">Fencing</NavLink>
            </li>
            <li>
              <NavLink to="/cabinetry">Cabinetry</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

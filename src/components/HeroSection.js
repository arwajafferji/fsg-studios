import "./HeroSection.css";
import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";

const HeroSection = () => (
  <div className="hero-section">
    <Navbar />
    <LogoHeader />
    <h1>Elegant. Custom. Architectural Finishes.</h1>
    <p>Crafted by FSG Studios</p>
  </div>
);

export default HeroSection;

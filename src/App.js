import "./App.css";
import HeroSection from "./components/HeroSection";
import LogoHeader from "./components/LogoHeader";
import MissionStatement from "./components/MissionStatement";
import ProjectGrid from "./components/ProjectGrid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <MissionStatement />
      <ProjectGrid />
    </div>
  );
}

export default App;

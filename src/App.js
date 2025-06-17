import "./App.css";
import HeroSection from "./components/HeroSection";
import LogoHeader from "./components/LogoHeader";
import MissionStatement from "./components/MissionStatement";
import ProjectGrid from "./components/ProjectGrid";
import Navbar from "./components/Navbar";
import Glass from "./pages/Glass";
import Tile from "./pages/Tile";
import Cabinetry from "./pages/Cabinets";
import Fencing from "./pages/Fencing";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MissionStatement />
              <ProjectGrid />
            </>
          }
        />

        <Route path="/glass" element={<Glass />} />
        <Route path="/tiles" element={<Tile />} />
        <Route path="/fencing" element={<Fencing />} />
        <Route path="/cabinetry" element={<Cabinetry />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

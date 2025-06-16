import ProjectCard from "./ProjectCard";
import "./ProjectGrid.css";
import Glass from "../images/glass.png";
import Tiling from "../images/tiling.png";
import Cabinetry from "../images/cabinetry.png";
import Fencing from "../images/fencing.png";

const projects = [
  { id: 1, image: Glass, title: "Custom Glass Systems" },
  { id: 2, image: Tiling, title: "Large Format Tiles" },
  { id: 3, image: Fencing, title: "Architectural Fencing" },
  { id: 4, image: Cabinetry, title: "Luxury Cabinetry" },
];

const ProjectGrid = () => (
  <div className="project-grid">
    {projects.map((p) => (
      <ProjectCard key={p.id} image={p.image} title={p.title} />
    ))}
  </div>
);

export default ProjectGrid;

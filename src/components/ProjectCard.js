import "./ProjectCard.css";

const ProjectCard = ({ image, title }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default ProjectCard;

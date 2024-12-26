import { Col } from "react-bootstrap";
import tick from "../assets/img/tick.svg";
import loading from "../assets/img/loading.svg";

export const ProjectCard = ({ title, description, imgUrl, link, completed = false}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj">
        <div className="proj-img-container">
        {imgUrl.map((url, index) => (
            <img key={index} src={url} alt={`Project ${index + 1}`} className="proj-img" />
          ))}
        </div>
        <div className="proj-title">{title}</div>
        <div className="proj-subtitle">{description}</div>
        <div className="proj-link-container"><a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">View Project Repository</a></div>
        <div className={`proj-status ${completed ? "completed" : "in-progress"}`}>
          <div className="proj-status-text">{completed ? (
            <>
              <img src={tick} alt="Tick" className="tick" />    COMPLETED
            </>
          ) : (
            <>
              <img src={loading} alt="loading" className="loading" />    ONGOING
            </>
          )}</div>
        </div>
      </div>
    </Col>
  )
}

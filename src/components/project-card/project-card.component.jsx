import Col from "react-bootstrap/Col";

import "./project-card.styles.scss";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbox">
        <img src={imgUrl} alt="description" />
        <div className="proj-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

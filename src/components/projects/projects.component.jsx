import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import krisClothing from "../../assets/img/kris-clothing.png";

import colorSharp2 from "../../assets/img/color-sharp2.png";

import ProjectCard from "../project-card/project-card.component";

import "./projects.styles.scss";

const projects = [
  {
    title: "Kris Clothing",
    description:
      "Clothing Store, build in React with react-router, react-redux with data deployed in Firestore",
    imgUrl: krisClothing,
    siteUrl: "https://krisclothing.netlify.app/",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    siteUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    siteUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    siteUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    siteUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    siteUrl: "",
  },
];

const Projects = () => {
  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quo aliquam tempore sequi adipisci? Quis reprehenderit vel tenetur
              assumenda architecto, expedita eaque velit, voluptates suscipit
              iste dignissimos tempora. Placeat, ducimus.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                className="nav-pills mb-5 justify-content-center align-items-center"
                variant="pills"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link id="firstProjectTab" eventKey="first">
                    Tab one
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="secondProjectTab" eventKey="second">
                    Tab two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="thirdProjectTab" eventKey="third">
                    Tab three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi corrupti esse reprehenderit, optio ullam soluta
                  aspernatur veniam. Delectus architecto quo quod. Dolore ut
                  sint vel, est qui saepe veritatis possimus.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci repudiandae pariatur ratione consequatur nisi
                  necessitatibus? Blanditiis ad porro neque, maxime, animi, cum
                  aliquid quaerat cupiditate possimus veniam atque dolor rem.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt="fundo espacial"
        className="background-img-right"
      />
    </section>
  );
};

export default Projects;

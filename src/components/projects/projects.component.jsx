import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import krisClothing from "../../assets/img/kris-clothing.png";
import HelpDesk from "../../assets/img/helpdesk.png";
import HiSocial from "../../assets/img/HiSocial.png";
import DoctorCare from "../../assets/img/Doctor Care.png";
import LetsFood from "../../assets/img/letsFood.png";

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
    title: "HelpDesk",
    description:
      "Call answering system build with Next-Js, react-redux, next-api using realTime database from google",
    imgUrl: HelpDesk,
    siteUrl: "https://helpdesk-gilt.vercel.app/",
  },
  {
    title: "HiSocial",
    description:
      "Social Media using MERNG stack - MongoDB, Express, Node, React and GraphQL",
    imgUrl: HiSocial,
    siteUrl: "https://hisocial.netlify.app/",
  },
  {
    title: "DoctorCare",
    description: "Single Page aplication with Html, Css and pure Javascript",
    imgUrl: DoctorCare,
    siteUrl: "https://krisdoctor.netlify.app/",
  },
  {
    title: "Lets Food",
    description:
      "Single Page aplication using NextJS and the best practices of TailwindCSS for styling",
    imgUrl: LetsFood,
    siteUrl: "https://lets-food-8ei9hx0gl-matheuskris.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Aqui estão alguns dos meus projetos pessoais que desenvolvi, e um
              resumo das tecnologias utilizadas. A maior parte foi feita apenas
              com o intuito de aprender tecnologias novas, porém alguns foram
              feitos sob demanda externa para uso profissional.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                className="nav-pills mb-5 justify-content-center align-items-center"
                variant="pills"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link id="firstProjectTab" eventKey="first">
                    Seção 1
                  </Nav.Link>
                  {/* </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="secondProjectTab" eventKey="second">
                    Tab two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="thirdProjectTab" eventKey="third">
                    Tab three
                  </Nav.Link> */}
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
                {/* <Tab.Pane eventKey="second">
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
                </Tab.Pane> */}
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

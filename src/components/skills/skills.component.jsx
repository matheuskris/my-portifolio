import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import _CSS from "../../assets/img/skills-icons/CSS.png";
import _HTML from "../../assets/img/skills-icons/HTML.png";
import _JS from "../../assets/img/skills-icons/JS.png";
import _NEXT from "../../assets/img/skills-icons/Next.png";
import _REACTJS from "../../assets/img/skills-icons/ReactJS.png";
import _TAILWIND from "../../assets/img/skills-icons/Tailwind.png";
import _TS from "../../assets/img/skills-icons/TypeScript.png";
import colorSharp from "../../assets/img/color-sharp.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./skills.styles.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Conhecimento Técnico</h2>
              <p>
                Um pouco das linguagens e frameworks que mais tenho estudado!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={_HTML} alt="Html logo" />
                  <h5>html</h5>
                </div>
                <div className="item">
                  <img src={_CSS} alt="Css logo" />
                  <h5>css</h5>
                </div>
                <div className="item">
                  <img src={_JS} alt="javascript logo" />
                  <h5>javaScript</h5>
                </div>
                <div className="item">
                  <img src={_TS} alt="TypeScript logo" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={_REACTJS} alt="ReactJs logo" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={_NEXT} alt="NextJS logo" />
                  <h5>NextJS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} alt="background" />
    </section>
  );
};

export default Skills;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./skills.styles.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
              <h2>skills</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus aut nesciunt tempore repellendus ipsam deleniti
                voluptatibus magni ipsum? Aspernatur laboriosam dicta fugit vel
                voluptatem non veritatis illo dignissimos commodi porro?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src={meter1}
                    alt="graphic of knowledge in Web Development"
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img
                    src={meter2}
                    alt="graphic of knowledge in Brand Identity"
                  />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="graphic of knowledge in Logo Design" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="graphic of knowledge in Web Development"
                  />
                  <h5>Web Development</h5>
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

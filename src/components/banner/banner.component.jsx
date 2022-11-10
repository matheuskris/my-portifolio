import useUpdateString from "../../hooks/useUpdateString";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";

import planet from "../../assets/img/planet-banner.png";

import "./banner.styles.scss";

const Banner = () => {
  const [text] = useUpdateString(
    ["Desenvolvedor Web", "Engenheiro Civil", "Modelo Fitness"],
    2000,
    200
  );

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem vindo ao meu Portfolio!!</span>
            <h1>
              Oi, meu nome é Matheus! <br />
              <span className="wrap ">{text}</span>
            </h1>
            <p>
              Sou um grande aspirante ao engenharia de software com grande
              paixão por aprender e por criar soluções inteligentes e criativas
              para pessoas. Hoje, aprimoro meus conhecimentos na área de
              desenvolvimento web, estudando linguagens como html, css e
              javascript, além de frameWorks como ReactJS e VueJS.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={planet} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

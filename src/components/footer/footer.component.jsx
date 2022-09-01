import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import githubIcon from "../../assets/img/github-icon.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/matheuskris/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/matheuskris">
                <img src={githubIcon} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/matheuskris/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

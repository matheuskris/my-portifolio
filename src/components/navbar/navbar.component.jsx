import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import "./navbar.styles.scss";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (event) => {
    const link = event.target.href.toString();
    const href = link.slice(link.search("#") + 1, link.length);
    setActiveLink(href);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" /> */}
          <h3>Matheus Kris</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/matheuskris/">
                <img src={navIcon1} alt="navIcon1" />
              </a>
              <a href="https://www.linkedin.com/in/matheuskris/">
                <img src={navIcon2} alt="navIcon2" />
              </a>
              <a href="https://www.linkedin.com/in/matheuskris/">
                <img src={navIcon3} alt="navIcon3" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

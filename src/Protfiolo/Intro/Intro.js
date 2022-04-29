import React from "react";
import Abstract from "./Abstarct.mp4";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import "./intro.css";
import Projects from "../Projects/Projects";
import About from "../About/About";
const Intro = () => {
  return (
    <>
      <Navbar className="navbar pt-0 justify-content-between bg-dark">
        <Navbar>
          <Nav.Link className="listtypes"> Mahesh</Nav.Link>
        </Navbar>
        <Navbar>
          <Nav.Link className="listtypes">Home</Nav.Link>
          <Nav.Link className="listtypes">Skills</Nav.Link>
          <Nav.Link className="listtypes"> Projects</Nav.Link>
          <Nav.Link className="listtypes"> Projects</Nav.Link>
          <Nav.Link className="listtypes">Contact</Nav.Link>
        </Navbar>
      </Navbar>
      <Row className="intro">
        <Col className="intro">
          <video muted autoPlay={"autoplay"} preload="auto" loop>
            <source src={Abstract} type="video/mp4" />
          </video>
        </Col>
        <div className="text-warpper">
          <span>
            <small>Hello,I'm</small>
            <h1>Mahesh.</h1>
            <p> I'm a front end Developer</p>
          </span>
        </div>
      </Row>
      <Row style={{ marginTop: "150px", display: "flex" }}>
        <Projects />
      </Row>
      <Row>
        <About />
      </Row>
    </>
  );
};

export default Intro;

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";
const TopBar = () => {
  return (
    <>
      <Navbar className="d-flex justify-content-between">
        <Nav.Link id="brand-name">ATools</Nav.Link>
        <Navbar className="w-50 justify-content-around">
          <Nav.Link id="start-free">Start Free Trail</Nav.Link>
          <Nav.Link id="login-here">Login</Nav.Link>
        </Navbar>
      </Navbar>
    </>
  );
};

export default TopBar;

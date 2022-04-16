import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";

import "./Banner.css";

const Banner = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const handleschange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get("https://reqres.in/api/login")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://reqres.in/api/login.json", {
        data,
      })
      .then((response) => {
        if (data !== "") {
          console.log("data", response.data);
          alert(`Enter passwowrd`);
        } else {
          console.log("data", response.data);
          alert("successfully");
        }
        console.log("status", response.status);
      })
      .catch((error) => console.log(error));
    setData("");
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col className="pt-5 justify-content-center">
          <Row
            className="d-flex justify-content-center flex-column text-center"
            id="form-head"
          >
            <h2
              style={{ fontSize: "30px", fontFamily: "'Oxygen', sans-serif" }}
            >
              <b>Welcome Back </b>
              <p style={{ fontSize: "15px" }}>
                <small>Sub-title text goes here </small>
              </p>
            </h2>
          </Row>
          <Row xs={2} className="justify-content-center">
            <form onSubmit={handlesubmit}>
              <input
                type="email"
                name="email"
                value={email ?? ""}
                onChange={handleschange}
                className="form-control p-3 my-3"
                placeholder="Email*"
              />
              <input
                type="password"
                name="password"
                value={password ?? ""}
                onChange={handleschange}
                className="form-control p-3 my-3"
                placeholder="password"
              />
              <input
                type="submit"
                value="Login"
                className="form-control p-3 my-3 bg-dark"
                style={{ color: "white" }}
              />
              <Row className="justify-content-between">
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Remember Password"
                    style={{
                      fontSize: "14px",
                      fontFamily: "bold",
                    }}
                  />
                </Col>
                <Col style={{ textAlign: "end" }}>
                  <p style={{ fontSize: "13px" }}>
                    <b> Forgot Password </b>
                  </p>
                </Col>
              </Row>
            </form>
          </Row>
        </Col>
        <Col id="banner">
          <img
            src="https://img.freepik.com/free-vector/watercolor-ramadan-landing-page-template_52683-82729.jpg?t=st=1649679095~exp=1649679695~hmac=86c5e7839c39df8b9686fb4a9e8350ce92b5d5b2954bebc484c17d07ad226dde&w=900"
            alt="..."
          />
        </Col>
      </Row>
    </>
  );
};

export default Banner;

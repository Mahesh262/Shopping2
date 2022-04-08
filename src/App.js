import React from "react";
import { Col, Row } from "react-bootstrap";
import Examples from "./Examples";
import Examplss from "./Examplss";
const App = () => {
  return (
    <>
      <Row>
        <Col xs={6} xl={6}>
          <Examplss />
        </Col>
        <Col xs={6} xl={6}>
          <Examples />
        </Col>
      </Row>
    </>
  );
};

export default App;

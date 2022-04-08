import React from "react";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
import "./Ques.css";
ChartJS.register(Tooltip, Title, ArcElement, Legend);

const Quesues = () => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [65, 90, 35, 15, 30, 70],
        backgroundColor: [
          "rgba(238, 119, 119, 1)",
          "rgba(75,170,180)",

          "rgba(31, 36,57, 1)",
          "rgba(249, 196, 128, 1)",
          "rgba(245, 180, 97, 1)",
          "rgba(234, 84, 85, 1)",
        ],
        borderColor: [
          "rgba(238, 119, 119, 1)",
          "rgba(75,170,180)",
          "rgba(31, 36,57, 1)",
          "rgba(249, 196, 128, 1)",
          "rgba(245, 180, 97, 1)",
          "rgba(234, 84, 85, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],

    labels: [
      "Processing Queue org",
      "Exception Queue blue",
      "Dupicate Queue blc",
      "Missing PO Queue yll",
      "Receipt Hold queue yll",
      "supplier Portal Queue red",
    ],
  };
  return (
    <>
      <h5>
        <strong> Quesues</strong>
      </h5>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Col>
          <Doughnut
            data={data}
            options={{
              type: "doughnut",
              legend: {
                position: "bottom",
              },
            }}
          />
        </Col>
        {/* <Col id="products">
          <ul>
            <li style={{ fontSize: "20px" }}>
              <p>Processing Queue org</p>
            </li>
            <p>Exception Queue blue </p>
            <p> Dupicate Queue blc </p>
            <p> Missing PO Queue yll Receipt</p>
            <p> Hold queue yllsupplier</p>
            <p> Portal Queue red </p>
          </ul>
        </Col> */}
      </Row>
    </>
  );
};

export default Quesues;

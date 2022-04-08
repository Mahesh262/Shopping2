import React from "react";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Row } from "react-bootstrap";
import "./Ques.css";
ChartJS.register(Tooltip, Title, ArcElement, Legend);

const Examplss = () => {
  return (
    <>
      <Row>
        <h3 id="title">Quesues</h3>
        <Doughnut
          data={{
            labels: [
              "Processing Queue ",
              "Exception Queue ",
              "Duplicate Queue ",
              "Missing PO Queue ",
              "Receipt Hold queue ",
              "supplier Portal Queue",
            ],
            datasets: [
              {
                label: "# of Votes",
                data: [65, 150, 35, 15, 30, 60],
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
                borderWidth: 1,

                hoverOffset: 6,
              },
            ],
          }}
          width={800}
          height={800}
          options={{
            layout: {
              padding: {
                left: 50,
              },
            },
            plugins: {
              legend: {
                position: "right",
                fontSize: 50,
                labels: {
                  //   boxWidth: 10,
                  usePointStyle: true,
                  pointStyle: "circle",
                  font: {
                    size: 10,
                  },
                },
              },
            },
          }}
        />
        <div id="first">
          <b>54</b>%
        </div>
      </Row>
    </>
  );
};

export default Examplss;

import React from "react";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Row } from "react-bootstrap";
import "./Ques.css";
ChartJS.register(Tooltip, Title, ArcElement, Legend);

const Examples = () => {
  return (
    <>
      <Row>
        <h3 id="title">KPI</h3>

        <Doughnut
          data={{
            labels: ["Role", "Person Responsible", "Triggers"],
            datasets: [
              {
                label: "# of Votes",
                data: [180, 90, 70],
                backgroundColor: [
                  "rgba(75,170,180)",
                  "rgba(244, 180,98, 1)",

                  "rgba(31, 36,57, 1)",
                ],
                borderColor: [
                  "rgba(75,170,180)",
                  "rgba(244, 180,98, 1)",

                  "rgba(31, 36,57, 1)",
                ],

                borderWidth: 2,
                hoverOffset: 3,
              },
            ],
          }}
          width={800}
          height={800}
          options={{
            plugins: {
              legend: {
                position: "right",

                labels: {
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
        <div id="too">
          <b>54</b>%
        </div>
        <div id="second">
          <b>30</b>%
        </div>
        <div id="third">
          <b>26</b>%
        </div>
      </Row>
    </>
  );
};

export default Examples;

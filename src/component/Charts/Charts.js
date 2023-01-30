import React, { useState } from "react";
import "../Charts/chart.css";
import BarGraph from "./BarGraph";
import { Data } from "./Data";
import DoughuntChart from "./DoughuntChart";
import LineChart from "./LineChart";

export default function Charts() {
  const [chartData] = useState({
    labels: Data.map((data) => data.year),

    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
          "rgb(86, 136, 245)",
          "rgb(149, 62, 230)",
          "rgb(245, 69, 77)"
        ],
        borderColor: "#202f47",
        borderWidth: 1.5,
        pointRadius: 3
      },
    ],
  });

  return (
    <div className="card-page">
      <div className="color-headers">
        <h1>Charts</h1>
        <p className="color-headers-para">
          Chart.js is a third party plugin that is used to generate the charts
          in this theme. The charts below have been customized - for further
          customization options, please visit the official Chart.js
          documentation.
        </p>
      </div>
      <div className="conatainer">
        <div className="button-Page-container chart-left">
          <div className="button-group">
            <div className="card-section-header py-3">Area Chart</div>
            <div className="card-section-body">
              <LineChart chartData={chartData} />
              <hr
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  border: "0px",
                  borderTop: "1px solid rgba(0,0,0,.1)",
                }}
              />
              <p>
                Styling for the area chart can be found in the chart.js file.
              </p>
            </div>
          </div>
          <div className="button-group">
            <div className="card-section-header py-3">Bar Chart</div>
            <div className="card-section-body">
              <BarGraph chartData={chartData} />
              <hr
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  border: "0px",
                  borderTop: "1px solid rgba(0,0,0,.1)",
                }}
              />
              <p>
                Styling for the bar chart can be found in the chart.js file.
              </p>
            </div>
          </div>
        </div>
        <div className="button-Page-container">
          <div className="button-group">
            <div className="card-section-header py-3">Donut Chart</div>
            <div className="card-section-body">
              <div
                style={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DoughuntChart />
              </div>
              <hr
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  border: "0px",
                  borderTop: "1px solid rgba(0,0,0,.1)",
                }}
              />
              <p>
                Styling for the donut chart can be found in the chart.js file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

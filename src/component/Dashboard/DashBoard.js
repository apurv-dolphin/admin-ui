import React from "react";
import { BsClipboard } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { TiMessages } from "react-icons/ti";
import Charts from "../Charts/Charts";
import "../Dashboard/dashboard.css";

export default function DashBoard() {
  return (
    <div className="card-page">
      <div>
        <h1>DashBoard</h1>
      </div>
      <div className="card-section">
        {/* Earnings (Monthly) Card Example */}
        <div className="card">
          <div className="card-bodys">
            <div>
              <div className="card-title">Earnings (Monthly)</div>
              <div className="card-details">$40,000</div>
            </div>
            <div className="card-icon">
              <FcCalendar fontSize={40} />
            </div>
          </div>
        </div>
        {/* Earnings (Annual) Card Example */}
        <div className="card border-left-success">
          <div className="card-bodys">
            <div>
              <div className="card-title text-succes">Earnings (Annual)</div>
              <div className="card-details">$215,000</div>
            </div>
            <div className="card-icon">
              <FaDollarSign fontSize={40} />
            </div>
          </div>
        </div>
        {/* Tasks Card Example */}
        <div className="card border-left-info">
          <div className="card-bodys">
            <div>
              <div className="card-title text-info">Tasks</div>
              <div className="card-details">50%</div>
            </div>
            <div className="card-icon">
              <BsClipboard fontSize={40} />
            </div>
          </div>
        </div>
        {/* Pending Requests Card Example */}
        <div className="card border-left-warning">
          <div className="card-bodys">
            <div>
              <div className="card-title text-warning">Pending Requests</div>
              <div className="card-details">18</div>
            </div>
            <div className="card-icon">
              <TiMessages fontSize={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="card-section">
        <Charts />
      </div>
      <div className="button-group">
        <div className="card-section-header py-3">Illustrations</div>
        <div className="card-section-body">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ textAlign: "center", width: "30rem", padding: "1.5rem" }}
              src="./undraw_posting_photo.svg"
              alt="..."
            />
          </div>
          <p>
            Add some quality, svg illustrations to your project courtesy of
            unDraw, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </p>
          <p style={{ marginBottom: "0rem" }}>
            <a target="_blank" rel="noreferrer" href="https://undraw.co/">
              Browse Illustrations on unDraw →
            </a>
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="button-group" style={{ margin: "5px", width: "50%" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <div className="small-card primary">
                primary
                <p className="color-name">#4e73df</p>
              </div>
              <div className="small-card sucess">
                Success
                <p className="color-name">#1cc88a</p>
              </div>
              <div className="small-card info">
                Info
                <p className="color-name">#36b9cc</p>
              </div>
              <div className="small-card primary">
                Warning
                <p className="color-name">#f6c23e</p>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div className="small-card danger">
                Danger
                <p className="color-name">#e74a3b</p>
              </div>
              <div className="small-card secondary">
                Secondary
                <p className="color-name">#858796</p>
              </div>
              <div className="small-card dark">
                Dark
                <p className="color-name">#5a5c69</p>
              </div>
              <div className="small-card light">
                Light
                <p className="color-name">#f8f9fc</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group" style={{ margin: "5px", height: "30%", width: "50%" }}>
          <div className="card-section-header py-3">Development Approach</div>
          <div className="card-section-body">
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
              order to reduce CSS bloat and poor page performance. Custom CSS
              classes are used to create custom components and custom utility
              classes.
            </p>
            <p style={{ marginBottom: "0rem" }}>
              Before working with this theme, you should become familiar with
              the Bootstrap framework, especially the utility classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

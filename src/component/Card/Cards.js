import React from "react";
import "../Card/card.css";
import { FcCalendar } from "react-icons/fc";

export default function Cards() {
  return (
    <div className="card-page">
      <div>
        <h1>Cards</h1>
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
              <FcCalendar fontSize={40} />
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
              <FcCalendar fontSize={40} />
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
              <FcCalendar fontSize={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="card-information">
        <div class="card-example">
          <div className="card-sections">
            <div class="card-section-header">Default Card Example</div>
            <div class="card-section-body">
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </div>
          </div>
          <div className="card-sections">
            <div class="card-section-header">Default Card Example</div>
            <div class="card-section-body">
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </div>
          </div>
        </div>
        {/* another one */}
        <div class="card-example">
          <div className="card-sections">
            <div class="card-section-header">Default Card Example</div>
            <div class="card-section-body">
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </div>
          </div>
          <div className="card-sections">
            <div class="card-section-header">Default Card Example</div>
            <div class="card-section-body">
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

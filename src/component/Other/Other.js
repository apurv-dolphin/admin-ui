import React from "react";
import "../Other/other.css";

export default function Other() {
  return (
    <div className="card-page">
      <div className="color-headers">
        <h1>Other Utilities</h1>
        <p className="color-headers-para">
          Bootstrap's default utility classes can be found on the official
          Bootstrap Documentation page. The custom utilities below were created
          to extend this theme past the default utility classes built into
          Bootstrap's framework.
        </p>
      </div>
      <div className="conatainer">
        <div className="button-Page-container">
          <div className="button-group">
            <div className="card-section-header py-3">
              Overflow Hidden Utilty
            </div>
            <div className="card-section-body">
              <p className="para">
                Use .o-hidden to set the overflow property of any element to
                hidden.
              </p>
            </div>
          </div>
          <div className="button-group">
            <div className="card-section-header py-3">
              Overflow Hidden Utilty
            </div>
            <div className="card-section-body">
              <div class="mb-1-small">Normal Progress Bar</div>
            </div>
          </div>
          <div className="button-group">
            <div className="card-section-header py-3">Dropdown - No Arrow</div>
            <div className="card-section-body">
              <div class="mb-1 small">Dropdown</div>
            </div>
          </div>
        </div>
        <div className="button-Page-container">
          <div className="button-group">
            <div className="card-section-header py-3">Rotation Utilities</div>
            <div className="card-section-body">
              <div style={{ textAlign: "center" }}>
                <div className="rotate primaryss">.rotate-15</div>
                <hr
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    border: "0px",
                    borderTop: "1px solid rgba(0,0,0,.1)",
                  }}
                />
                <div className="rotate n-15 primaryss">.rotate-n-15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

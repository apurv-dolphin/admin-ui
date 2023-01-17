import React from "react";
import "../Button/buttons.css";
import { FiCheck } from "react-icons/fi";
import { FaFacebookF, FaFlag } from "react-icons/fa";
import { BsInfoCircle, BsExclamationTriangle } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";

export default function Buttons() {
  return (
    <>
      <div className="button-page">
        <h1>Buttons</h1>
        <div className="button-container">
          <div className="button-Page-container">
            <div className="button-group">
              <div className="card-section-header py-3">Circle Buttons</div>
              <div className="card-section-body">
                <p style={{ marginBottom: "2px" }}>
                  Use Font Awesome Icons (included with this theme package)
                  along with the circle buttons as shown in the examples below!
                </p>
                {/* circle btn start */}
                <div className="mb">
                  <code>.btn-circle</code>
                  <div>
                    <button className="btns">
                      <FaFacebookF style={{ color: "#fff" }} />
                    </button>
                    <button className="btns succes">
                      <FiCheck style={{ color: "#fff" }} />
                    </button>
                    <button className="btns info">
                      <BsInfoCircle style={{ color: "#fff" }} />
                    </button>
                    <button className="btns warnings">
                      <BsExclamationTriangle style={{ color: "#fff" }} />
                    </button>
                    <button className="btns danger">
                      <AiOutlineDelete style={{ color: "#fff" }} />
                    </button>
                  </div>
                </div>
                <div className="mb">
                  <code>.btn-circle .btn-sm</code>
                  <div>
                    <button className="btns sm">
                      <FaFacebookF style={{ color: "#fff" }} />
                    </button>
                    <button className="btns succes sm">
                      <FiCheck style={{ color: "#fff" }} />
                    </button>
                    <button className="btns info sm">
                      <BsInfoCircle style={{ color: "#fff" }} />
                    </button>
                    <button className="btns warnings sm">
                      <BsExclamationTriangle style={{ color: "#fff" }} />
                    </button>
                    <button className="btns danger sm">
                      <AiOutlineDelete style={{ color: "#fff" }} />
                    </button>
                  </div>
                </div>
                <div className="mb">
                  <code>.btn-circle .btn-lg</code>
                  <div>
                    <button className="btns lg">
                      <FaFacebookF style={{ color: "#fff" }} />
                    </button>
                    <button className="btns succes lg">
                      <FiCheck style={{ color: "#fff" }} />
                    </button>
                    <button className="btns info lg">
                      <BsInfoCircle style={{ color: "#fff" }} />
                    </button>
                    <button className="btns warnings lg">
                      <BsExclamationTriangle style={{ color: "#fff" }} />
                    </button>
                    <button className="btns danger lg">
                      <AiOutlineDelete style={{ color: "#fff" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-group">
              <div className="card-section-header py-3">Brand Buttons</div>
              <div className="card-section-body">
                <p style={{ marginBottom: "2px" }}>
                  Google and Facebook buttons are available featuring each
                  company's respective brand color. They are used on the user
                  login and registration pages.
                </p>
                <p style={{ marginBottom: "2px" }}>
                  You can create more custom buttons by adding a new color
                  variable in the _variables.scss file and then using the
                  Bootstrap button variant mixin to create a new style, as
                  demonstrated in the _buttons.scss file.
                </p>
                <button className="main-btn danger">
                  <BsGoogle /> .btn-google
                </button>

                <button className="main-btn facebook">
                  <FaFacebookF style={{ color: "#fff" }} /> .btn-facebook
                </button>
              </div>
            </div>
          </div>
          <div className="button-Page-container">
            <div className="button-group">
              <div className="card-section-header py-3">
                Split Buttons with Icon
              </div>
              <div className="card-section-body">
                <p>
                  Works with any button colors, just use the .btn-icon-split
                  class and the markup in the examples below. The examples below
                  also use the .text-white-50 helper class on the icons for
                  additional styling, but it is not required.
                </p>
                <div className="split">
                  <div className="split-btn primary">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Primary</p>
                  </div>
                  <div className="split-btn succes">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Success</p>
                  </div>
                  <div className="split-btn info">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Info</p>
                  </div>
                  <div className="split-btn warnings">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Primary</p>
                  </div>
                  <div className="split-btn danger">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Warning</p>
                  </div>
                  <div className="split-btn secondary">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Secondary</p>
                  </div>
                  <div className="split-btn light">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text light">Split Button Light</p>
                  </div>
                </div>
                <p>Also works with small and large button classes!</p>
                <div className="split">
                  <div className="split-btn primary small">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Small</p>
                  </div>
                  <div className="split-btn primary large">
                    <p className="split-icon">
                      <FaFlag />
                    </p>
                    <p className="split-text">Split Button Large</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

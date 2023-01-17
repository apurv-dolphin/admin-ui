import React, { useState } from "react";
import "../Card/card.css";
import { FcCalendar } from "react-icons/fc";
import { FaDollarSign, FaAngleDown, FaGreaterThan } from "react-icons/fa";
import { BsClipboard } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

export default function Cards() {
  const [show, setShow] = useState(false);
  const [openAccordian, setOpenAccordian] = useState(true);

  const openAccordianTab = () => {
    setOpenAccordian(!openAccordian);
  };

  const openDropDown = () => {
    setShow(!show);
  };
  return (
    <>
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
        <div className="card-information">
          <div className="card-example">
            <div className="card-sections">
              <div className="card-section-header">Default Card Example </div>
              <div className="card-section-body">
                This card uses Bootstrap's default styling with no utility
                classes added. Global styles are the only things modifying the
                look and feel of this default card example.
              </div>
            </div>
            <div className="card-sections">
              <div className="card-section-header">Default Card Example</div>
              <div className="card-section-body">
                This card uses Bootstrap's default styling with no utility
                classes added. Global styles are the only things modifying the
                look and feel of this default card example.
              </div>
            </div>
          </div>
          {/* another one */}
          <div className="card-example">
            <div className="card-sections">
              <div className="card-section-header">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>Default Card Example </p>
                  <span>
                    <HiOutlineEllipsisVertical
                      onClick={openDropDown}
                      fontSize={25}
                      style={{
                        color: "#858796",
                        textAlign: "center",
                        width: "1.25em",
                        cursor: "pointer",
                      }}
                    />
                  </span>
                </div>
              </div>
              {show && (
                <div className="dropDown">
                  <div className="accordian">
                    <div className="accordian-contain">
                      <h6 className="accordian-header">DROPDOWN HEADER:</h6>
                      <p className="accordian-item">Action</p>
                      <p className="accordian-item">Action action</p>
                      <div
                        className="dropdown-divider"
                        style={{ borderTop: "1px solid #eaecf4" }}
                      />
                      <p className="accordian-item">Something else here</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="card-section-body">
                Dropdown menus can be placed in the card header in order to
                extend the functionality of a basic card. In this dropdown card
                example, the Font Awesome vertical ellipsis icon in the card
                header can be clicked on in order to toggle a dropdown menu.
              </div>
            </div>
            <div className="card-sections">
              <div className="card-section-header">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>Default Card Example </p>
                  <span>
                    <span>
                      {openAccordian ? (
                        <FaAngleDown
                          onClick={openAccordianTab}
                          fontSize={25}
                          style={{
                            color: "#858796",
                            textAlign: "center",
                            width: "1.25em",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <FaGreaterThan
                          onClick={openAccordianTab}
                          style={{
                            color: "#858796",
                            textAlign: "center",
                            width: "1.25em",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </span>
                  </span>
                </div>
              </div>
              {openAccordian && (
                <div className="card-section-body">
                  This is a collapsable card example using Bootstrap's built in
                  collapse functionality. Click on the card header to see the
                  card body collapse and expand!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

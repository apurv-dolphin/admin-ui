import React, { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import { TbArrowBigLeft } from "react-icons/tb";
import { FaGreaterThan, FaAngleDown } from "react-icons/fa";
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineFolder,
  AiOutlineLineChart,
} from "react-icons/ai";
import "./maincomponentcss/sidebar.css";
import { Link } from "react-router-dom";

export default function SiderBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const openAccordian = (id) => {
    if (id === 1) {
      setShowComponent(!showComponent);
    } else if (id === 2) {
      setShowUtilities(!showUtilities);
    } else if (id === 3) {
      setShowPages(!showPages);
    }
    setActiveIndex(id);
  };

  return (
    <ul>
      <Link to="/">
        <div className="sidebar-brandname">
          <p className="laugh-icon">
            <BsEmojiLaughing style={{ transform: "rotate(-15deg)" }} />
          </p>
          <p style={{ display: "inline" }}>
            AK ADMIN <sup>2</sup>
          </p>
        </div>
      </Link>
      <hr />
      <li className="nav-item">
        <Link to="/">
          <p className="nav-contain">
            <span>
              <AiOutlineDashboard />
            </span>
            <span>Dashboard</span>
          </p>
        </Link>
      </li>
      <hr />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <p className="nav-contain" onClick={() => openAccordian(1)}>
          <span>
            <AiOutlineSetting />
          </span>
          <span>Components</span>
          <span className="sidebar-accordian">
            {activeIndex === 1 && showComponent ? (
              <FaAngleDown fontSize={20} />
            ) : (
              <FaGreaterThan />
            )}
          </span>
        </p>
      </li>
      {activeIndex === 1 && showComponent && (
        <div className="accordian">
          <div className="accordian-contain">
            <h6 className="accordian-header">Custom Components:</h6>
            <Link to="/buttons">
              <p className="accordian-item">Buttons</p>
            </Link>
            <Link to="/cards">
              <p className="accordian-item">Cards</p>
            </Link>
          </div>
        </div>
      )}
      <li className="nav-item">
        <p className="nav-contain" onClick={() => openAccordian(2)}>
          <span>
            <BiWrench />
          </span>
          <span>Utilities</span>
          <span className="sidebar-accordian">
            {activeIndex === 2 && showUtilities ? (
              <FaAngleDown fontSize={20} />
            ) : (
              <FaGreaterThan />
            )}
          </span>
        </p>
      </li>
      {activeIndex === 2 && showUtilities && (
        <div className="accordian">
          <div className="accordian-contain">
            <h6 className="accordian-header">Custom Utilities:</h6>
            <Link to="/colors">
              <p className="accordian-item">Colors</p>
            </Link>
            <Link to="/borders">
              <p className="accordian-item">Borders</p>
            </Link>
            <Link to="/animation">
              <p className="accordian-item">Animations</p>
            </Link>
            <Link to="/others">
              <p className="accordian-item">Others</p>
            </Link>
          </div>
        </div>
      )}
      <hr />
      <div className="sidebar-heading">addons</div>
      <li className="nav-item">
        <p className="nav-contain" onClick={() => openAccordian(3)}>
          <span>
            <AiOutlineFolder />
          </span>
          <span>Pages</span>
          <span className="sidebar-accordian">
            {activeIndex === 3 && showPages ? (
              <FaAngleDown fontSize={20} />
            ) : (
              <FaGreaterThan />
            )}
          </span>
        </p>
      </li>
      {activeIndex === 3 && showPages && (
        <div className="accordian">
          <div className="accordian-contain">
            <h6 className="accordian-header">Login screens:</h6>
            <Link to="/login">
              <p className="accordian-item">Login</p>
            </Link>
            <Link to="/register">
              <p className="accordian-item">Register</p>
            </Link>
            <Link to="forgotpassword">
              <p className="accordian-item">Forgot Password</p>
            </Link>
            <h6 className="accordian-header">other pages:</h6>
            <Link to="*">
              <p className="accordian-item">404 Page</p>
            </Link>
            <Link to="/blankpage">
              <p className="accordian-item">Blank Page</p>
            </Link>
          </div>
        </div>
      )}
      <li className="nav-item">
        <Link to="/charts">
          <p className="nav-contain">
            <span>
              <AiOutlineLineChart />
            </span>
            <span>Charts</span>
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/tables">
          <p className="nav-contain">
            <span>
              <CiViewTable />
            </span>
            <span>Tables</span>
          </p>
        </Link>
      </li>
      <hr />
      <div className="sidebar-toggle">
        <button className="sidebar-btn">
          <TbArrowBigLeft />
        </button>
      </div>
    </ul>
  );
}

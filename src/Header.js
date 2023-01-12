import React from "react";
import { FcSearch } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { SlEnvolope } from "react-icons/sl";
import { AiOutlineBell } from "react-icons/ai";
import "./maincomponentcss/header.css";

export default function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <form className="header-search">
        <div className="inputs-group">
          <input type="text" placeholder="Serch for..." />
          <button>
            <FcSearch fontSize={20} />
          </button>
        </div>
      </form>
      <div style={{
        display: "flex", alignItems: "center", float: "right", cursor: "pointer", color: "#858796"
      }}>
        <p style={{ position: "relative" }}>
          <AiOutlineBell fontSize={20} style={{ margin: "0px 10px" }} />
          <span className="notification">3+</span>
        </p>
        <p style={{ position: "relative" }}>
          <SlEnvolope fontSize={20} style={{ margin: "0px 10px" }} />
          <span className="notification">7</span>
        </p>
        <div className="vertical-line"></div>
        <p style={{ display: "flex", alignItems: "center" }}>
          Khalas Apurv
          <CgProfile fontSize={30} style={{ margin: "0px 5px" }} />
        </p>
      </div>
    </div>
  );
}

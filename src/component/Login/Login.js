import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";

export default function Login() {
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginDetail({
      ...loginDetail,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (!loginDetail.email || !loginDetail.password) {
      alert("Somthing Went to wrong")
    } else {
      navigation("/");
    }
  }

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="user-area">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
        </div>
        <form className="user">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="input-tags"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="input-tags"
              id="exampleInputPassword"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="small-checkbox">
              <input
                type="checkbox"
                className="input-checkbox"
                id="customCheck"
              />
              <label className="checkbox-label" htmlFor="customCheck">
                Remember Me
              </label>
            </div>
          </div>
          <button to="/" className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <hr
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              border: "0px",
              borderTop: "1px solid rgba(0,0,0,.1)",
            }}
          />
          <Link to="/login" className="login-btn-google">
            Login with Google
          </Link>
          <Link to="/login" className="login-btn-facebook">
            Login with Facebook
          </Link>
        </form>
        <hr
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            border: "0px",
            borderTop: "1px solid rgba(0,0,0,.1)",
          }}
        />
        <div className="text-center">
          <Link to="/forgotpassword" className="small">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center">
          <Link to="/register" className="small">
            Create an Account!
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div class="user-area">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
        </div>
        <form class="user">
          <div class="form-group">
            <input
              type="email"
              class="input-tags"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="input-tags"
              id="exampleInputPassword"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <div class="small-checkbox">
              <input
                type="checkbox"
                class="input-checkbox"
                id="customCheck"
              />
              <label class="checkbox-label" for="customCheck">
                Remember Me
              </label>
            </div>
          </div>
          <Link to="/login" class="login-btn">
            Login
          </Link>
          <hr
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              border: "0px",
              borderTop: "1px solid rgba(0,0,0,.1)",
            }}
          />
          <Link to="/login" class="login-btn-google">
            Login with Google
          </Link>
          <Link to="/login" class="login-btn-facebook">
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
        <div class="text-center">
          <Link to="/forgotpassword" class="small">
            Forgot Password?
          </Link>
        </div>
        <div class="text-center">
          <Link to="/register" class="small">
            Create an Account!
          </Link>
        </div>
      </div>
    </div>
  );
}

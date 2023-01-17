import React from "react";
import { Link } from "react-router-dom";
import "../Register/register.css";

export default function Register() {
  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div class="user-area">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
        </div>
        <form class="user">
          <div className="form-groups">
            <div className="input-size">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="inputbox"
              />
            </div>
            <div className="input-size">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="inputbox"
              />
            </div>
          </div>
          <div className="form-groups">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="inputbox"
              style={{ marginRight: "1.75rem" }}
            />
          </div>
          <div className="form-groups">
            <div className="input-size">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="inputbox"
              />
            </div>
            <div className="input-size">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="inputbox"
              />
            </div>
          </div>
          <Link to="/login" class="login-btn">
            Register Account
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
          <Link to="/login" class="small">
            Already have an account? Login!
          </Link>
        </div>
      </div>
    </div>
  );
}

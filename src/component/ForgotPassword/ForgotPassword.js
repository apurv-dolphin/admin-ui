import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div class="user-area">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-4">Forgot Your Password?</h1>
          <h4 style={{ color: "#858796", marginBottom: "1.5rem" }}>
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </h4>
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
          <Link to="/login" class="login-btn">
            Reset Password
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
            Create an Account!
          </Link>
        </div>
        <div class="text-center">
          <Link to="/register" class="small">
            Already have an account? Login!
          </Link>
        </div>
      </div>
    </div>
  );
}

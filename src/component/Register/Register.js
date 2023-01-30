import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Register/register.css";

export default function Register() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // validation
  const validate = () => {
    let erros = {};
    if (!userData.firstname) {
      erros.firstname = "please write your first name";
      setError(erros);
      return false;
    } else if (!userData.lastname) {
      erros.lastname = "please write your last name";
      setError(erros);
      return false;
    }
    const validEmail = (emailAddress) => {
      return !emailAddress.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
      );
    };
    if (validEmail(userData.email)) {
      erros.email = "please write your valid email";
      setError(erros);
      return false;
    }
    if (!userData.password) {
      erros.password = "please write your password";
      setError(erros);
      return false;
    } else if (!userData.repeatpassword) {
      erros.repeatpassword = "please write your repeatpassword";
      setError(erros);
      return false;
    }
    setError(erros);
    return true;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(userData);
      setUserData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatpassword: "",
      });
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="user-area">
        <div className="error-message">
          <h3>{error.firstname ? error.firstname : ""}</h3>
          <h3>{error.lastname ? error.lastname : ""}</h3>
          <h3>{error.email ? error.email : ""}</h3>
          <h3>{error.password ? error.password : ""}</h3>
          <h3>{error.repeatpassword ? error.repeatpassword : ""}</h3>
        </div>
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
        </div>
        <form className="user">
          <div className="form-groups">
            <div className="input-size">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="inputbox"
                value={userData.firstname}
                onChange={handleInput}
              />
            </div>
            <div className="input-size">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="inputbox"
                value={userData.lastname}
                onChange={handleInput}
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
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-groups">
            <PhoneInput
              country={"in"}
              // value={this.state.phone}
              // onChange={(phone) => this.setState({ phone })}
            />
          </div>
          <div className="form-groups">
            <div className="input-size">
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="inputbox"
                value={userData.password}
                onChange={handleInput}
              />
            </div>
            <div className="input-size">
              <input
                type="text"
                name="repeatpassword"
                placeholder="Repeat Password"
                className="inputbox"
                value={userData.repeatpassword}
                onChange={handleInput}
              />
            </div>
          </div>
          <div onClick={handleSubmit} className="login-btn">
            Register Account
          </div>
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
          <Link to="/login" className="small">
            Already have an account? Login!
          </Link>
        </div>
      </div>
    </div>
  );
}

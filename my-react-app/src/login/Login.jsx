import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import logo from "../components/insta_logo.svg";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="le-epic-box">
        <img src={logo} className="logo"></img>
        <input
          className="user-handle"
          placeholder="Phone number, username, or email"
        ></input>
        <input
          className="password"
          placeholder="Password"
          type="password"
        ></input>
        <Link to="/account">
          <button className="login-button" type="button">
            Login
          </button>
        </Link>
      </div>
      <div className="le-epic-box-2">
        <p1>Dont have an account?</p1>
        <Link to="/sign-up">
          <p1>Sign Up</p1>
        </Link>
      </div>
    </>
  );
}

export default Login;

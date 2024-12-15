import { Link } from "react-router";
import logo from "../components/insta_logo.svg";
import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="box-1">
        <img src={logo} className="logo"></img>
        <input
          className="text-entry"
          placeholder="Mobile Number or Email"
        ></input>
        <input
          className="text-entry"
          type="password"
          placeholder="Password"
        ></input>
        <input className="text-entry" placeholder="Full Name"></input>
        <input className="text-entry" placeholder="Username"></input>
        <p1 className="text">
          People who use our service may have uploaded your contact information
          to Instagram. Learn More
        </p1>
        <p1 className="text">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </p1>
        <Link to="/">
          <button className="signup-button" type="button">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="box-2">
        <p1>Have an Account?</p1>
        <Link to="/">
            <p1>Login</p1>
        </Link>
      </div>
    </>
  );
}

export default Signup;

import React, { Component } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
require("./main.css");

// Creating the Main component
export default class About extends Component {
  render() {
    return (
      <div className="container full-height-grow">
        <header className="main-header">
          <a href="" className="brand-logo">
            <img className="logo" src={logo} alt="" />
            {/* <div className="brand-logo-name"></div> */}
          </a>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/login"}>Log In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="home-main-section">
          <div className="call-to-action">
            <h1 className="title">6 Minutes With Fruit</h1>
            <span className="subtitle">
              Use Psychology to Hack Your Stress Eating
            </span>
            <a href="#" className="btn">
              Start
            </a>
          </div>

          <div className="img-wrapper">
            <div className="orange-feature-img"></div>
          </div>
        </section>

        <div className="home-page-circle-1"></div>
        <div className="home-page-circle-2"></div>
        <div className="home-page-circle-3"></div>
      </div>
    );
  }
}

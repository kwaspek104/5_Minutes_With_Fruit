import React, { Component } from "react";
import logo from "./images/orange.png";
import { Link } from "react-router-dom";
require("./main.css");

// Creating the Main component
export default class Instructions extends Component {
  render() {
    return (
      <div className="container full-height-grow">
        <header className="main-header">
          <a href="" className="brand-logo">
            <img className="logo" src={logo} alt="" />
         
          </a>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to={"/"}>Homepage</Link>
              </li>
             
            </ul>
          </nav>
        </header>


        <section className="home-main-section">
          <div className="call-to-action">
            
            <span className="subtitle">
              Use Psychology to Hack Your Stress Eating
            </span>

            <Link to="/signup">
              <button type="button" className="btn">REGISTER</button>
            </Link>

            
          </div>

          <div className="img-wrapper">
            <div className="orange-feature-img"></div>
          </div>
        </section>
       

      </div>
    );
  }
}

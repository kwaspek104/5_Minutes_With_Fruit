// Include React
import React, { Component } from "react";
// import AudioPlayer from './AudioPlayer';
// import Nav from "./children/Nav";
import Footer from "./children/Footer";
import logo from "./images/orange.png"

require("./main.css");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div className="container full-height-grow">
        {/* <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        /> */}

        <header className="main-header">
          {/* <a href="" className="brand-logo">
            <img className="logo" src={logo} alt=""/>
            <div className="brand-logo-name">6 Minutes With Fruit</div>
          </a> */}
          <nav className="main-nav">
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Log In</a></li>
            </ul>
          </nav>
        </header>

        <section className="home-main-section">
          

          <div>
          <h1 className="title">6 Minutes With Fruit</h1>
          <span className="subtitle">Use Psychology to Hack Your Stress Eating</span>
          <a href="#" className="btn">Start</a>
          </div>

          <div className="img-wrapper">
            <div className="orange-feature-img">

            </div>
          </div>
          
        </section>

        <Footer />
      </div>
    );
  }
}

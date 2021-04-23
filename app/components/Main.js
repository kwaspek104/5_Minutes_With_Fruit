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
          <a href="" className="brand-logo">
            <img className="logo" src={logo} alt=""/>
            <div className="brand-logo-name">6 Minutes With Fruit</div>
          </a>
          <nav className="main-nav">
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Log In</a></li>
            </ul>
          </nav>
        </header>
        <section className="discover-main-section">
          <div className="call-to-action">
            <h1 className="title"></h1>
          </div>

        </section>

        <Footer />
      </div>
    );
  }
}

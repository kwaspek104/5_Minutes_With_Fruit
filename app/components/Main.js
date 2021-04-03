// Include React
import React, { Component } from 'react';
// import AudioPlayer from './AudioPlayer';
import Nav from './children/Nav'

require('./main.css');

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />   
        <header className="intro">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h1 className="brand-heading">5 Minutes With Fruit!</h1>
                            <h3 className="intro-text">Reduce Stress Eating Therapeutically!</h3>
                            
                            <a href="#about" className="btn btn-circle page-scroll">
                                <i className="fa down-arrow animated">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        

        <section id="about" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                 
                    <button className="btn" >Get Started</button>
                </div>
            </div>
        </section>

        

        <footer>
            <div className="container text-center">
                <p>Copyright &copy; 5-minutes with fruit 2021</p>
            </div>
        </footer>
      </div>
    );
  }
}

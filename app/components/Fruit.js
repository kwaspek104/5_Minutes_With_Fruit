import React, { Component } from "react";
import Nav from './children/Nav';


export default class Fruit extends Component {
  // set the state
  // add a return
  render() {
    

    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
      
      <div className="card mb-3">
        
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
          <h2 className="card-title">YOUR FRUIT</h2>
          <p className="card-text">
            The fruit that would work best for you is a _ _ _ _ _ _ !
          </p>
          <a href="#" className="btn btn-primary">
            Go to your profile page
          </a>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

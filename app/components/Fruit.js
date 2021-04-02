import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Fruit extends Component {
  // set the state
  // add a return
  render() {
    return (
      <div class="card mb-3">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div class="card-body">
          <h2 class="card-title">YOUR FRUIT</h2>
          <p class="card-text">
            The fruit that would work best for you is a _ _ _ _ _ _ !
          </p>
          <a href="#" class="btn btn-primary">
            Go to your profile page
          </a>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  }
}

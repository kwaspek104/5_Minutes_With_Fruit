import React, { Component } from "react";

require("./footer.css")

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container text-center">
            <p>Copyright &copy; 5-minutes with fruit 2021</p>
          </div>
        </footer>
      </div>
    );
  }
}

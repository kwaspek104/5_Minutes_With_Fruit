import React, { Component } from "react";
// import * as Survey from "survey-react";
// import "survey-react/survey.css";


require("./styles/quiz.css");



export default class Quiz extends Component {

  render() {
    

    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
        <br/>
      
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

  
  //   constructor(props) {
  //   super(props);
  //   this.state = { isCompleted: false };
  //   this.onCompleteComponent = this.onCompleteComponent.bind(this);
  // }
  // onCompleteComponent() {
  //   this.setState({ isCompleted: true });
  // }
  // render() {
  //   let json = {
  //     questions: [
  //       {
  //         type: "checkbox",
  //         name: "car",
  //         title: "What car are you driving?",
  //         isRequired: true,
  //         hasSelectAll: true,
  //         hasNone: true,
  //         noneText: "None of the above",
  //         colCount: 4,
  //         choicesOrder: "asc",
  //         choices: [
  //           "Apple",
  //           "Apricots",
  //           "Banana",
  //           "Blueberries",
  //           "Cantaloupe",
  //           "Cherries",
  //           "Clementines",
  //           "Grapes",
  //           "Honeydew",
  //           "Kiwi",
  //           "Mango",
  //           "Nectarines",
  //           "Orange",
  //           "Peachers",
  //           "Pears",
  //           "Pineapple",
  //           "Plums",
  //           "Pomegranate",
  //           "Starfruit",
  //           "Strawberries"
  //         ]
  //       }
  //     ]
  //   };
  //   var surveyRender = !this.state.isCompleted ? (
  //     <Survey.Survey
  //       json={json}
  //       showCompletedPage={false}
  //       onComplete={this.onCompleteComponent}
  //     />
  //   ) : null;
  //   var onCompleteComponent = this.state.isCompleted ? (
  //     <div>The component after onComplete event</div>
  //   ) : null;
  //   return (
  //     <div>
  //       {surveyRender}
  //       {onCompleteComponent}
  //     </div>
  //   );
  // }

}
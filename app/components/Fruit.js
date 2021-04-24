import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./styles.css";
import "survey-react/survey.css";
import Nav from './children/Nav';

class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  render() {
    let json = {
      questions: [
        {
          type: "checkbox",
          name: "car",
          title: "What kind of fruit do you like?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Apple",
            "Apricots",
            "Banana",
            "Blueberries",
            "Cantaloupe",
            "Cherries",
            "Clementines",
            "Grapes",
            "Honeydew",
            "Kiwi",
            "Mango",
            "Nectarines",
            "Orange",
            "Peachers",
            "Pears",
            "Pineapple",
            "Plums",
            "Pomegranate",
            "Starfruit",
            "Strawberries"
          ]
        }
      ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>SurveyJS react example</h1>
      <h2>Checkbox - none of the above and select all</h2>
      <SurveyComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

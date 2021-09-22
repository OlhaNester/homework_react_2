import React, { Component } from "react";
// import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (event) => {
    this.setState((prevState) => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  render() {
    const total = Object.values(this.state).reduce(function (a, b) {
      return a + b;
    });

    const positivePercentage = Math.round((this.state.good / total) * 100);

    return (
      <div className="App">
        <h1>Please leave feedback </h1>
        <div>
          <button type="button" name="good" onClick={this.handleChange}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.handleChange}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.handleChange}>
            Bad
          </button>
        </div>
        ;
        <div>
          <h1>Statistics</h1>
          <div>
            <p>Good: {this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Total:{total}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

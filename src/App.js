import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import './App.css';

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
    const { good, neutral, bad } = this.state;
    const total = Object.values(this.state).reduce(function (a, b) {
      return a + b;
    });

    const positivePercentage = Math.round((this.state.good / total) * 100);

    const options = Object.keys(this.state);

    return (
      <div className="App">
        <p className="doyoulike"> Do you like our coffee?</p>
        <Section title={"Please leave feedback"} >
        
        <FeedbackOptions options={options} onLeaveFeedback={this.handleChange} />
        </Section>
        <Section title={"Statistics"} >
           {total===0 ? (<Notification message="No feedback given"/>):
           (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>) }
        
        </Section>
       
        </div>
    );
  }
};

export default App;

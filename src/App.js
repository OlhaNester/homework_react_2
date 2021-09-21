import React, {Component} from 'react';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = (event) => {
    console.log(event.target.name);
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    Object.values(this.state).reduce(function (a, b) {
      return a + b
          });
  }
  render() {
  return (
    <div className="App">
      <h1>Please leave feedback </h1>
      <div>
        <button type="button" onClick={this.handleGood} >Good</button>
        <button type="button" onClick={ this.handleNeutral}>Neutral</button>
      <button type="button" onClick={this.handleBad}>Bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <div>
          <p>Good: { this.state.good}</p>
          <p>Neutral:{ this.state.neutral}</p>
          <p>Bad:{ this.state.bad}</p>
          <p>Total:{ }</p>
 <p>Positive Feedback:</p>
        </div>
      </div>
      
    </div>
  );
}}

export default App;

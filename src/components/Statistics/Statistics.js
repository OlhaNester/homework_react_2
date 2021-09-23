import React from 'react';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (<div className="Statistics">
       
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
   
       
  </div>)
};

export default Statistics;
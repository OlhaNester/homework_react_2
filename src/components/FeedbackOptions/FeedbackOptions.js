import React from "react";
import './FeedbackOptions.css';

// const FeedbackOptions = ({options, onLeaveFeedback}) => {
//   return (
//     <div>
//       <button type="button" name={options[0]} onClick={onLeaveFeedback}>
//         {options[0]}
//       </button>
//       <button type="button" name={options[1]} onClick={onLeaveFeedback}>
//         {options[1]}
//       </button>
//       <button type="button" name={options[2]} onClick={onLeaveFeedback}>
//         {options[2]}
//       </button>
//     </div>);
// }

// export default FeedbackOptions;


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="FeedbackOptions">
    {options.map(option => (<button type="button" className="button" name={option} onClick={onLeaveFeedback}>
      {option}
    </button>))}
    
    
  </div>)
};
export default FeedbackOptions;
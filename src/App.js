import React, { useState } from 'react';
import './App.css';


function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);


  const giveFeedback = (type) => {
    switch (type) {
      case 'good':
        setGoodCount(goodCount + 1);
        break;
      case 'neutral':
        setNeutralCount(neutralCount + 1);
        break;
      case 'bad':
        setBadCount(badCount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="main">
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={() => giveFeedback('good')}>Good</button>
      <button onClick={() => giveFeedback('neutral')}>Neutral</button>
      <button onClick={() => giveFeedback('bad')}>Bad</button>

      <h1>Statistics</h1>
      <div>
        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
      </div>
    </div>
    </div>
  );
}

export default App;

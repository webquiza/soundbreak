// this import gives access to useState & useEffect hooks
import React from "react";
//import "./App.css";

function App() {
  // keep track of milliseconds timer has been on
  const [time, setTime] = React.useState(0);
  // checks if timer is on
  const [timerOn, setTimeOn] = React.useState(false);

  // useEffect hook will run everytime the timerOn variable changes
  React.useEffect(() => {
    // null because this will be same hook if we turn timer on or off
    let interval = null;

    // if timer is on we initialize interval
    if (timerOn) {
      // setInterval & clearInterval are a Javascript methods. Source: https://www.w3schools.com/jsref/met_win_setinterval.asp

      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      // if timer is off we clear interval
    } else if (!timerOn) {
      clearInterval(interval);
    }

    // clear interval set above
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      {/*displays time variable*/}
      <div>{time}</div>

      <div>
        {/* when buttons are clicked, it sets timer to true or false*/}
        <button onClick={() => setTimeOn(true)}>Start</button>
        <button onClick={() => setTimeOn(false)}>Stop</button>
        <button onClick={() => setTimeOn(true)}>Resume</button>

        {/* when button is clicked, it sets timer to zero*/}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;

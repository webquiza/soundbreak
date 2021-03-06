// this import gives access to useState & useEffect hooks
import React from "react";
import "./App.css";

const App = () => {
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
    <React.Fragment>
      <div className="Watch">
        <div id="display">
          {/*minutes*/}
          <span>{("0" + Math.floor((time / 60000) % 100)).slice(-2)}:</span>

          {/*seconds*/}
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>

          {/*hundredth of a second*/}
          {/*<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>*/}
        </div>

        <div>
          {/* when buttons are clicked, it sets timer to true or false. Each have conditional rendering*/}
          {!timerOn && time === 0 && (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setTimeOn(true)}
            >
              Start
            </button>
          )}

          {timerOn && (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setTimeOn(false)}
            >
              Stop
            </button>
          )}

          {!timerOn && time !== 0 && (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setTimeOn(true)}
            >
              Resume
            </button>
          )}

          {!timerOn && time > 0 && (
            //when button is clicked, it sets timer to zero
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setTime(0)}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

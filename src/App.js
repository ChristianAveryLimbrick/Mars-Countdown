import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

function Body() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const launchDate = new Date("July 30, 2024 00:00:00").getTime();

  useEffect(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
    const interval = setInterval(() => {
      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Mars Mission Countdown</h5>
        </div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/355938/pexels-photo-355938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mars"
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                As the countdown ticks away, the weight of humanity's survival
                rests on this Mars mission. United by unseen calamities, we send
                our last hope skyward. This is not just a launch. It is our
                final gamble against extinction.
              </p>
              <div className="countdown">
                <div className="countdown-item">
                  <p id="days" className="number"></p>
                  <span className="text">{days} days </span>
                </div>
                <div className="countdown-item">
                  <p id="hours" className="number"></p>
                  <span className="text">{hours} hours</span>
                </div>
                <div className="countdown-item">
                  <p id="minutes" className="number"></p>
                  <span className="text">{minutes} minutes </span>
                </div>
                <div className="countdown-item">
                  <p id="seconds" className="number"></p>
                  <span className="text">{seconds} seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

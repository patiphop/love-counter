import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const startDate = new Date(process.env.REACT_APP_START_DATE).getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 100); // Update every 100 milliseconds for performance

    return () => clearInterval(timer);
  }, []);

  const elapsed = currentTime - startDate;

  if (elapsed < 0) {
    return (
      <div className="counter-container">
        <p className="future-message">Counting will start soon!</p>
      </div>
    );
  }

  // Calculate time components
  const milliseconds = elapsed % 1000;
  const totalSeconds = Math.floor(elapsed / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return (
    <div className="counter-container">
      <div className="counter">
        <div className="time-segment">
          <span className="number">{days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-segment">
          <span className="number">{hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-segment">
          <span className="number">{minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-segment">
          <span className="number">{seconds}</span>
          <span className="label">Seconds</span>
        </div>
        <div className="time-segment">
          <span className="number">{milliseconds}</span>
          <span className="label">Milliseconds</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;

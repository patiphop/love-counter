import React, { useState, useEffect } from 'react';
import './Counter.css';
import { calculateElapsedTime } from '../utils/time';

const Counter = () => {
  const startDate = new Date(process.env.REACT_APP_START_DATE).getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 100); // Update every 100 milliseconds for performance

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const elapsed = calculateElapsedTime(startDate, currentTime);

  // If the start date is in the future
  if (!elapsed) {
    return (
      <div className="counter-container">
        <p className="future-message">Counting will start soon!</p>
      </div>
    );
  }

  return (
    <div className="counter-container">
      <div className="counter">
        <div className="date-section">
          <div className="time-segment">
            <span className="number">{formatNumber(elapsed.years)}</span>
            <span className="label">Years</span>
          </div>
          <div className="time-segment">
            <span className="number">{formatNumber(elapsed.months)}</span>
            <span className="label">Months</span>
          </div>
          <div className="time-segment">
            <span className="number">{formatNumber(elapsed.days)}</span>
            <span className="label">Days</span>
          </div>
        </div>
        <div className="time-section">
          <div className="time-segment">
            <span className="number">{formatNumber(elapsed.hours)}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-segment">
            <span className="number">{formatNumber(elapsed.minutes)}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-segment">
            <span className="number">{formatNumber(elapsed.seconds)}</span>
            <span className="label">Seconds</span>
          </div>
          <div className="time-segment">
            <span className="number">{elapsed.milliseconds}</span>
            <span className="label">Milliseconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  // State for counting seconds
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect runs whenever isRunning changes
  useEffect(() => {
    let timer;

    if (isRunning) {
      // Increment seconds every 1 second
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup when stopped or unmounted
    return () => clearInterval(timer);
  }, [isRunning]);

  // Functions to control the timer
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={styles.container}>
      <h1>⏱️ Timer App</h1>
      <h2>{seconds}s</h2>

      <div style={styles.buttonContainer}>
        <button onClick={handleStart} style={styles.button}>Start</button>
        <button onClick={handleStop} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};


export default TimerApp;

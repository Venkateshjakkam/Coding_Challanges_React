import React, { useEffect, useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timer;
    if (pause) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 59) {
            setMinutes((m) => m + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [pause]);

  const handleStart = () => {
    setPause(true);
  };

  const handlePause = () => {
    setPause(false);
  };

  const handleStop = () => {
    setPause(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <h4>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h4>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWatch;

import { useState, useRef, useEffect } from "react";

export function useTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef(null);

  const start = (minutes) => {
    if (timer === 0) {
      setTimer(minutes * 60);
    }
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimer(0);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  return {
    isRunning,
    timer,
    minutes,
    seconds,
    start,
    pause,
    reset,
    setTimer,
  };
}

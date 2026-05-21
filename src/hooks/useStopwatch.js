import { useState, useCallback, useRef } from "react";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
}

function useStopwatch() {
    // Stopwatch widget state variables
    const [elapsed, setElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState([]);

    // Stopwatch widget Handlers
    const intervalRef = useRef(null);
    const elapsedRef = useRef(0);

    function handleStart() {
        if (isRunning) return;
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            elapsedRef.current += 10;
            setElapsed(prev => prev + 10);
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    }
    
    // Implemented useCallback
    const handleLap = useCallback(() => {
        if (!isRunning) return;
        setLapTimes(prev => [...prev, formatTime(elapsedRef.current)]);
    }, [isRunning])

    function handleReset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        elapsedRef.current = 0;
        setElapsed(0);
        setIsRunning(false);
        setLapTimes([]);
    }


    return {
        currentTime: formatTime(elapsed),  // ← pre-formatted so App doesn't need formatTime
        isRunning,
        lapTimes,
        handleStart,
        handleStop,
        handleLap,
        handleReset,
    };
}

export default useStopwatch;
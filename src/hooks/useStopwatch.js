import { useReducer, useCallback, useRef } from "react";
import { stopwatchReducer, initialState } from "./stopwatchReducer";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
}

function useStopwatch() {
    // Stopwatch widget state variables
    const [state, dispatch] = useReducer(stopwatchReducer, initialState);

    // Stopwatch widget Handlers
    const intervalRef = useRef(null);
    const elapsedRef = useRef(0);

    function handleStart() {
        if (state.isRunning) return;
        dispatch({ type: 'START' });
        intervalRef.current = setInterval(() => {
            elapsedRef.current += 10;
            dispatch({ type: 'TICK' });
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        dispatch({ type: 'STOP' });
    }
    
    // Implemented useCallback
    const handleLap = useCallback(() => {
        if (!state.isRunning) return;
        dispatch({ type: 'LAP' });
    }, [state.isRunning]);

    function handleReset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        elapsedRef.current = 0;
        dispatch({ type: 'RESET' });
    }


    return {
        currentTime: formatTime(state.elapsed),  // ← pre-formatted so App doesn't need formatTime
        isRunning: state.isRunning,
        lapTimes: state.lapTimes.map(formatTime),  // ← pre-formatted so App doesn't need formatTime
        handleStart,
        handleStop,
        handleLap,
        handleReset,
    };
}

export default useStopwatch;
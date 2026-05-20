import { useEffect, useState } from 'react';

import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StatRing from './components/StatRing';
import StopwatchWidget from './components/StopwatchWidget';
import ShowCurrentMode from './components/ShowCurrentMode';

import './index.css';

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
}

function App() {
  const [currentMode, setCurrentMode] = useState('clock');

  // Time state variables
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(()=> {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Stopwatch widget state variables
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

  // Functional updater -> avoids stale closure
  //setElapsed(prev => prev + 10);

  // Lap appends to array
  //setLapTimes(prev => [...prev, formatTime(elapsed)]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setElapsed(prev => prev + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Stopwatch widget Handlers
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  
  const handleLap = () => {
    if (!isRunning) return;
    setLapTimes(prev => [...prev, formatTime(elapsed)]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsed(0);
    setLapTimes([]);
  };


  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold text-white text-center mb-4">OmniWatch UI</h1>
          <p className="text-gray-400 text-lg mb-8">
            A simple project to introduce React and Tailwindcss.
          </p>
      </div>

      <ShowCurrentMode currentMode={currentMode} />
      
      <WatchFrame>

        {/* Mode toggle */}
        <button
          onClick={() => setCurrentMode(prev => prev === 'clock' ? 'stopwatch' : 'clock')}
          className="mt-2 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {currentMode === 'clock' ? 'Switch to Stopwatch' : 'Switch to Clock'}
        </button>

        {currentMode === 'clock' && (
          <TimeDisplay hours={time.getHours()} minutes={time.getMinutes()} seconds={time.getSeconds()} format="12" />
        )}

        <div className="flex gap-4">
          <StatRing label="Steps"      value="8,432" target="10,000" color="border-green-500"  />
          <StatRing label="Calories"   value="420"   target="600"    color="border-orange-500" />
          <StatRing label="Heart Rate" value="72"    target="120"    color="border-red-500"    />
        </div>

        {currentMode === 'stopwatch' && (
          <StopwatchWidget
            currentTime={formatTime(elapsed)}
            isRunning={isRunning}
            lapTimes={lapTimes}
            onStart={handleStart}   // ← was onStartStop
            onStop={handleStop}     // ← new
            onLap={handleLap}
            onReset={handleReset}
          />
        )}

      </WatchFrame>
    </div>
  );
}

export default App;
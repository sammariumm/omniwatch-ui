import { useCallback, useEffect, useState } from 'react';

import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StatRing from './components/StatRing';
import StopwatchWidget from './components/StopwatchWidget';
import ShowCurrentMode from './components/ShowCurrentMode';

import useStopwatch from './hooks/useStopwatch';
import useTimeDisplay from './hooks/useTimeDisplay';

import './index.css';

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function App() {
  const [currentMode, setCurrentMode] = useState('clock');

  // Stopwatch
  const {
    currentTime,
    isRunning,
    lapTimes,
    handleStart,
    handleStop,
    handleLap,
    handleReset,
  } = useStopwatch();

  const { time } = useTimeDisplay();

  // Stats state variable
  const [stats, setStats] = useState({
    steps: generateRandom(5000, 12000),
    calories: generateRandom(200, 800),
    heartRate: generateRandom(58, 110),
  })

  const [lastSync, setLastSync] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSyncStats = useCallback(() => {
    setIsSyncing(true);

    // Simulate a network request
    setTimeout(() => {
      setStats({
        steps:     generateRandom(5000, 12000),
        calories:  generateRandom(200, 800),
        heartRate: generateRandom(58, 110),
      });
      setLastSync(new Date());
      setIsSyncing(false);
    }, 1000);
  }, [])

  // Spread to update one key
  // Heart rate interval 
  useEffect(() => {
    const id = setInterval(() => {
      const delta = (Math.random() * 10 - 5) | 0
      setStats(prev => ({
        ...prev, heartRate: prev.heartRate + delta
      }))
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold text-white text-center mb-4">OmniWatch UI</h1>
          <p className="text-gray-400 text-lg mb-8">
            A simple project to introduce React and Tailwindcss.
          </p>
      </div>

      {/*<ShowCurrentMode currentMode={currentMode} />*/}
      
      <WatchFrame>

        {/* Mode toggle */}
        <ShowCurrentMode
          currentMode={currentMode}
          onToggle={() => setCurrentMode(prev => prev === 'clock' ? 'stopwatch' : 'clock')}
        />

        {currentMode === 'clock' && (
          <TimeDisplay hours={time.getHours()} minutes={time.getMinutes()} seconds={time.getSeconds()} format="12" />
        )}

        <div className="flex gap-4">
          <StatRing label="Steps"      value={stats.steps.toLocaleString()} target="10,000" color="border-green-500"  />
          <StatRing label="Cal"        value={stats.calories}               target="800"    color="border-orange-500" />
          <StatRing label="BPM"        value={stats.heartRate}              target="120"    color="border-red-500"    />
        </div>

        {/* Sync button */}
        <button
          onClick={handleSyncStats}
          disabled={isSyncing}
          className="mt-2 px-5 py-1.5 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white text-xs font-semibold rounded-full transition-colors"
        >
          {isSyncing ? 'Syncing...' : '⇄ SYNC STATS'}
        </button>

        {currentMode === 'stopwatch' && (
          <StopwatchWidget
            currentTime={currentTime}
            isRunning={isRunning}
            lapTimes={lapTimes}
            onStart={handleStart}  
            onStop={handleStop}   
            onLap={handleLap}
            onReset={handleReset}
          />
        )}

      </WatchFrame>

      <p className="mt-3 text-xs text-slate-400">
        {lastSync
          ? `last sync: ${lastSync.toLocaleTimeString()}`
          : 'never synced'}
      </p>
    </div>
  );
}

export default App;
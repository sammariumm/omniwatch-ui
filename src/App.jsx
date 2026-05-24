import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StatRing from './components/StatRing';
import StopwatchWidget from './components/StopwatchWidget';
import ShowCurrentMode from './components/ShowCurrentMode';
import { useWatch } from './hooks/useWatch';

import useStopwatch from './hooks/useStopwatch';
import useTimeDisplay from './hooks/useTimeDisplay';
import useStats from './hooks/useStats';

import './index.css';

function App() {
  const [currentMode, setCurrentMode] = useState('clock');
  const { toggleTheme, theme } = useWatch();

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

  // Time display
  const { time, format, handleToggleFormat } = useTimeDisplay();

  // Stats
  const { stats, lastSync, isSyncing, syncError, handleSyncStats } = useStats();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
    <Toaster position="top-center" />
    <div>
      <h1 className="text-5xl font-bold text-white text-center mb-4">OmniWatch UI</h1>
        <p className="text-gray-400 text-lg mb-8">
          A simple project to introduce React and Tailwindcss.
        </p>
    </div>

    {/* Theme toggle */}
    <button
      onClick={toggleTheme}
      className="mb-4 px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors
        border-slate-600 text-slate-400 hover:text-white hover:border-white">
      {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
    </button>
    
    <WatchFrame>

      {/* Mode toggle */}
      <ShowCurrentMode
        currentMode={currentMode}
        onToggle={() => setCurrentMode(prev => prev === 'clock' ? 'stopwatch' : 'clock')}
      />

      {currentMode === 'clock' && (
        <TimeDisplay hours={time.getHours()} minutes={time.getMinutes()} seconds={time.getSeconds()} format={format} onClick={handleToggleFormat}  />
      )}

      <div className="flex gap-4">
        <StatRing label="Steps"      value={stats.steps.toLocaleString()}         target="10,000" color="border-green-500"  />
        <StatRing label="Cal"        value={stats.calories.toLocaleString()}      target="800"    color="border-orange-500" />
        <StatRing label="BPM"        value={stats.heartRate.toLocaleString()}     target="120"    color="border-red-500"    />
      </div>

      {/* Sync button */}
      <button
        onClick={handleSyncStats}
        disabled={isSyncing}
        className="mt-2 px-5 py-1.5 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white text-xs font-semibold rounded-full transition-colors"
      >
        {isSyncing ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-3 w-3 text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 22 6.477 22 12h-4z"/>
            </svg>
            Syncing...
          </span>
        ) : (
          '⇄ SYNC STATS'
        )}
      </button>

      {syncError && (
        <p className="text-xs text-red-400">{syncError}</p>
      )}

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
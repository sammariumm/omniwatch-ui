import { useEffect, useState } from 'react';

import WatchFrame from './components/WatchFrame';
import TimeDisplay from './components/TimeDisplay';
import StatRing from './components/StatRing';
import StopwatchWidget from './components/StopwatchWidget';
import ShowCurrentMode from './components/ShowCurrentMode';

import './index.css';

function App() {
  const [currentMode, setCurrentMode] = useState('clock');

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(()=> {
      setTime(new Date())
    }, 1000)
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

      <ShowCurrentMode currentMode={currentMode} />
      
      <WatchFrame>

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
            currentTime="01:23.45"
            isRunning={false}
            lapTimes={['00:58.20', '00:25.25']}
          />
        )}

        {/* Mode toggle */}
        <button
          onClick={() => setCurrentMode(prev => prev === 'clock' ? 'stopwatch' : 'clock')}
          className="mt-2 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {currentMode === 'clock' ? 'Switch to Stopwatch' : 'Switch to Clock'}
        </button>

      </WatchFrame>
    </div>
  );
}

export default App;
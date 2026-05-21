function StopwatchWidget({ currentTime, isRunning, lapTimes, onStart, onStop, onLap, onReset }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">

      {/* Label */}
      <span className="text-xs text-gray-400 tracking-widest">STOPWATCH</span>

      {/* Timer */}
      <span className={`text-5xl font-bold tracking-tight ${isRunning ? 'text-green-400' : 'text-white'}`}>
        {currentTime}
      </span>

      {/* Lap times — scrollable after 3 laps */}
      <div className="w-full flex flex-col gap-1 px-4 mb-1 h-16 overflow-y-auto scrollbar-hide">
        {lapTimes.map((lap, index) => (
          <div key={index} className="flex justify-between text-xs text-gray-300 shrink-0">
            <span className="text-gray-400">LAP {index + 1}</span>
            <span>{lap}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 items-center">
        {!isRunning ? (
          <button onClick={onStart}
            className="flex items-center gap-1.5 px-5 py-2 bg-green-500 hover:bg-green-400 text-white text-xs font-bold rounded-full transition-colors">
            ▶ START
          </button>
        ) : (
          <button onClick={onStop}
            className="flex items-center gap-1.5 px-5 py-2 bg-red-500 hover:bg-red-400 text-white text-xs font-bold rounded-full transition-colors">
            ■ STOP
          </button>
        )}

        <button onClick={onLap} disabled={!isRunning}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 disabled:opacity-40 text-white text-xs font-bold rounded-full transition-colors">
          LAP
        </button>

        <button onClick={onReset}
          className="w-8 h-8 flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-full transition-colors">
          ↺
        </button>
      </div>

    </div>
  );
}

export default StopwatchWidget;
function StopwatchWidget({ currentTime, isRunning, lapTimes, onStart, onStop, onReset, onLap }) {
  return (
    <div className="flex flex-col items-center w-full px-2">

      <p className="text-xs tracking-widest text-slate-400 mb-1">STOPWATCH</p>

      {/* ✅ Color switches based on isRunning */}
      <div className={`text-4xl mb-3 ${isRunning ? 'text-green-400' : 'text-white'}`}>
        {currentTime}
      </div>

      {/* Lap list */}
      <div className="w-full max-h-20 overflow-y-auto mb-2 space-y-1">
        {lapTimes.map((t, i) => (
          <div key={i} className="flex justify-between text-xs text-slate-300 px-2">
            <span>LAP {i + 1}</span>
            <span>{t}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        {isRunning
          ? <button onClick={onStop}  className="text-xs px-4 py-1.5 bg-red-500 text-white text-sm font-semibold rounded-full">■STOP</button>
          : <button onClick={onStart} className="text-xs px-4 py-1.5 bg-green-500 text-black text-sm font-semibold rounded-full">▶START</button>
        }
        <button onClick={onLap}   className="text-xs px-4 py-1.5 bg-slate-700 text-white text-sm font-semibold rounded-full">LAP</button>
        <button onClick={onReset} className="text-xs px-3 py-1.5 bg-slate-700 text-white text-sm rounded-full">↺</button>
      </div>

    </div>
  );
}

export default StopwatchWidget;
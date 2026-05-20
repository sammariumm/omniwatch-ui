function ShowCurrentMode({ currentMode, onToggle }) {
  if (currentMode === 'clock') {
    return (
      <button onClick={onToggle} className="mt-2 text-xs text-slate-400 hover:text-white transition-colors">
        Switch to Stopwatch
      </button>
    );
  } else {
    return (
      <button onClick={onToggle} className="mt-2 text-xs text-slate-400 hover:text-white transition-colors">
        Switch to Clock
      </button>
    );
  }
}

export default ShowCurrentMode;
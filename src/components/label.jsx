function ShowCurrentMode( { currentMode } ) {
  if (currentMode === 'clock') {
    return (
        <div className="text-2xl font-bold text-white mb-4">
          currentMode = Clock
        </div>
    );
  } else {
    return (
        <div className="text-2xl font-bold text-white mb-4">
          currentMode = Stopwatch
        </div>
    );
  }
}

export default ShowCurrentMode;
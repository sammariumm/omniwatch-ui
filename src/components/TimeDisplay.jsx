function TimeDisplay({ hours, minutes, seconds, format, onClick }){
  const displayHours = format === '12' ? (hours % 12 || 12) : hours;

  return (
    <div className="flex flex-col items-center cursor-pointer select-none" onClick={onClick}>
      <p className="text-5xl font-bold text-white tracking-tight">
        {String(displayHours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}
      </p>
      <p className="text-sm text-slate-400 mt-1">
        {format === '12' ? (hours >= 12 ? 'PM' : 'AM') : 'Military'} · {String(seconds).padStart(2, '0')}s
      </p>
    </div>
  );
}

export default TimeDisplay;
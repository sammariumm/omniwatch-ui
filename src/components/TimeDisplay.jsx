import { useWatch } from './WatchContext';

function TimeDisplay({ hours, minutes, seconds }) {
  const { timeFormat, setTimeFormat, colors } = useWatch();

  const displayHours = timeFormat === '12'
    ? (parseInt(hours) % 12 || 12).toString().padStart(2, '0')
    : String(hours).padStart(2, '0');

  const period = timeFormat === '12'
    ? parseInt(hours) >= 12 ? 'PM' : 'AM'
    : null;

  return (
    <div className="flex flex-col items-center cursor-pointer"
         onClick={() => setTimeFormat(prev => prev === '12' ? '24' : '12')}>
      <span className={`${colors.text} text-4xl font-bold tracking-tight`}>
        {displayHours}:{String(minutes).padStart(2, '0')}
      </span>
      <span className={`${colors.subtext} text-xs mt-1`}>
        {period && <span>{period} · </span>}
        {String(seconds).padStart(2, '0')}s
      </span>
    </div>
  )
}

export default TimeDisplay;
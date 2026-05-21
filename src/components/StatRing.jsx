import { useWatch } from './WatchContext';

function StatRing({ value, label, color }) {
  const { colors } = useWatch();

  return (
    <div className={`w-16 h-16 rounded-full border-2 ${color}
                     flex flex-col items-center justify-center`}>
      <span className={`${colors.text} text-xs font-bold leading-tight`}>{value}</span>
      <span className={`${colors.subtext} text-[9px] mt-0.5`}>{label}</span>
    </div>
  )
}

export default StatRing;
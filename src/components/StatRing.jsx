function StatRing({ value, label, color }) {
  return (
    <div className={`w-16 h-16 rounded-full border-2 ${color}
                     flex flex-col items-center justify-center`}>
      <span className="text-white text-xs font-bold leading-tight">{value}</span>
      <span className="text-gray-400 text-[9px] mt-0.5">{label}</span>
    </div>
  )
}

export default StatRing;
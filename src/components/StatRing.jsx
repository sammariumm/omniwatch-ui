function StatRing({ value, label, color }) {
  return (
    <div className={`metric-ring metric-ring--${color}`}>
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

export default StatRing;
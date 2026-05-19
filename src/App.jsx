import './index.css';

function App() {
  return (
    <div className="container">
      <div className="label">
        <h1>App.jsx - monolithic, no components</h1>
      </div>

      <div className="watch-frame">

        <div className="watch-time">
          10:42 AM
        </div>

        <div className="watch-metrics">

          <div className="metric-ring metric-ring--green">
            <div className="metric-value">8,432</div>
            <div className="metric-label">Steps</div>
          </div>

          <div className="metric-ring metric-ring--orange">
            <div className="metric-value">420</div>
            <div className="metric-label">Cal</div>
          </div>

          <div className="metric-ring metric-ring--red">
            <div className="metric-value">72</div>
            <div className="metric-label">BPM</div>
          </div>

        </div>

        <div className="watch-stopwatch-label">STOPWATCH</div>
        <div className="watch-stopwatch-time">01:23.45</div>

        <div className="watch-laps">
          <div className="lap-chip">LAP 1  00:58.20</div>
          <div className="lap-chip">LAP 2  00:25.25</div>
        </div>

      </div>
    </div>
  );
}

export default App;
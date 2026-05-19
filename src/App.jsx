import './index.css';
import StatRing from './components/StatRing';

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
          <StatRing value="8,432" label="Steps" color="green" />
          <StatRing value="420" label="Cal" color="orange" />
          <StatRing value="72" label="BPM" color="red" />
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
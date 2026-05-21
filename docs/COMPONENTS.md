# OmniWatch Components

## StatRing

A circular progress ring for fitness stats.

### Props

| Prop | Type | Description                     |
|------|------|---------------------------------|
|label |string| The stat name shown below the value |
|value |string| The current value shown |
|target|string| Goal value (shown for context) |
|color |string| Tailwind border class for color of the ring |

### Example

```js
<StatRing label="Steps" value="8,567" target="10,000" color="border-green-500">
```

---

## TimeDisplay

Shows current time (hardcoded).

### Props

| Prop | Type | Description                 |
|------|------|-----------------------------|
|hours | int  | Shows current hour  |
|minutes| int | Shows current minute |
|seconds| int | Shows current second |
|format | int | Sets the format to civilian time (12) or military time (00 or 24) |
|onClick| () => void | Calls the function passed to it when time is clicked |

### Example

```js
// Time is shown as civilian format, with actual values fetched from RTC
<TimeDisplay hours={time.getHours()} minutes={time.getMinutes()} seconds={time.getSeconds()} format="12" />
```

---

## StopwatchWidget

Widget that displays a fully functional stopwatch with start, stop, lap, and reset buttons. Can be toggled by clicking the `Switch to Stopwatch` button.

### Props

| Prop | Type | Description                 |
|------|------|-----------------------------|
|currentTime|string| Accepts current time as a string |
|isRunning|boolean| Changes text color to green if set to true |
|lapTimes|string[]| Accepts an array of strings representing time | 
|onStart|() => void| Called when the start button is pressed |
|onStop|() => void| Called when the stop button is pressed |
|onReset|() => void| Called when reset button is pressed |
|onLap|() => void| Called when lap button is pressed |

### Example

```js
// Calls the appropriate functions, values and handlers
<StopwatchWidget
            currentTime={formatTime(elapsed)}
            isRunning={isRunning}
            lapTimes={lapTimes}
            onStart={handleStart}  
            onStop={handleStop}   
            onLap={handleLap}
            onReset={handleReset}
          />
```

---

## WatchFrame
Outer box that serves as the digital manifestation of a watch.

### Props

| Prop | Type | Description                 |
|------|------|-----------------------------|
|children| node | Renders the content passed to `WatchFrame` |

### Example

```js
<WatchFrame>
    // Hardcoded values
    <TimeDisplay hours="22" minutes="42" seconds="05" format="12" />
</WatchFrame>
```

---

## ShowCurrentMode

Displays the current mode set as `Clock` or `Stopwatch`.

### Props

| Prop | Type | Description                 |
|------|------|-----------------------------|
|currentMode| string | Shows the current display mode |
|onToggle|() => void | Called when `Switch to <mode>` button is pressed |

### Example 

```js
<ShowCurrentMode
    currentMode={currentMode}
    onToggle={() => setCurrentMode(prev => prev === 'clock' ? 'stopwatch' : 'clock')}
/>
```
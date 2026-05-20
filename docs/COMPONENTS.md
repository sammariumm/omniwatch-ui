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

### Example

```js
// Time is shown as military format
<TimeDisplay hours="22" minutes="42" seconds="05" format="00" /> 
```

---

## StopwatchWidget

Widget that displays a stopwatch. Can be toggled by clicking the `Switch to Stopwatch` button.

### Props

| Prop | Type | Description                 |
|------|------|-----------------------------|
|currentTime|string| Accepts current time as a string |
|isRunning|boolean| Changes text color to green if set to true |
|lapTimes|array| Accepts an array of strings representing time | 

### Example

```js
// Shows only one lap
<StopwatchWidget currentTime="01:23.45" isRunning={false} lapTimes={['00:58.20']} />
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

### Example 

```js
<ShowCurrentMode currentMode={currentMode} />
```
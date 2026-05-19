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
|format | int | Sets the format to civilian time (12) or military time (00) |

### Example

```js
// Time is shown as military format (00)
<TimeDisplay hours="22" minutes="42" seconds="05" format="00" /> 
```

---


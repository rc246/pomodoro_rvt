import { useState } from "react";

export default function App() {
  // [read, write] = useState(initialState)
  // timeLeft holds current seconds; setTimeLeft updates state & re-renders component
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h1>Focus Timer</h1>
      <div>{formatTime(timeLeft)}</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTimeLeft(25 * 60);
        }}
      >
        Reset
      </button>
    </div>
  );
}

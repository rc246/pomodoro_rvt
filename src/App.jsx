import { useState, useEffect } from "react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect(() => {
  //   let timer = null;
  //   if (isRunning && timeLeft > 0) {
  //     timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
  //   } else if (timeLeft === 0) {
  //     setIsRunning(false);
  //   }
  //   return () => clearInterval(timer);
  // }, [isRunning, timeLeft]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      if (timeLeft <= 1) {
        setTimeLeft(0);
        setIsRunning(false);
      } else {
        setTimeLeft((t) => t - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-4">
      <div className="w-full max-w-sm rounded-2xl bg-slate-800 p-8 text-center shadow-xl border border-slate-700">
        <h1 className="text-xl font-semibold tracking-wider text-slate-400 uppercase mb-4">
          Focus Timer
        </h1>
        <div className="text-6xl font-bold font-mono tracking-tighter text-indigo-400 my-8">
          {formatTime(timeLeft)}
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition active:scale-95 ${
              isRunning
                ? "bg-amber-500 hover:bg-amber-600 text-slate-950"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(25 * 60);
            }}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-medium transition active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

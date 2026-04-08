import { useState } from "react";
import { useTimer } from "./useTimer";

function App() {
  const [timeInput, setTimeInput] = useState("");
  const { minutes, seconds, start, pause, reset } = useTimer();

  return (
    <div style={{ textAlign: "center" }}>
      <p>Қанша уақыт (минут)?</p>

      <input
        value={timeInput}
        onChange={(e) => setTimeInput(e.target.value)}
        placeholder="Уақыт"
      />

      <h1>
        {minutes}:{seconds}
      </h1>

      <button
        onClick={() => {
          if (timeInput) {
            start(Number(timeInput));
            setTimeInput("");
          }
        }}
      >
        Start
      </button>

      <button onClick={pause}>Pause</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
